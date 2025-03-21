import { ReactNode } from "react";

interface SkillData {
  level: number;
  maxLevel: number;
  xp?: number;
  xpForNext?: number;
  progress: number;
}

interface SlayerData {
  level?: number;
  xp?: number;
}

interface ProfileData {
  username: string;
  uuid: string;
  rank: string;
  rankColor?: ReactNode;
  skyblock_level: number;
  coins: number;
  bank: number;
  fairySouls: {
    collected: number;
    total: number;
  };
  skills: {
    combat: SkillData;
    mining: SkillData;
    farming: SkillData;
    foraging: SkillData;
    fishing: SkillData;
    enchanting: SkillData;
    alchemy: SkillData;
    taming: SkillData;
    carpentry: SkillData;
  };
  slayer: {
    zombie: { level: number; xp: number };
    spider: { level: number; xp: number };
    wolf: { level: number; xp: number };
    enderman: { level: number; xp: number };
    blaze: { level: number; xp: number };
  };
  stats: {
    health: number;
    defense: number;
    strength: number;
    speed: number;
    critChance: number;
    critDamage: number;
    intelligence: number;
  };
  networth: number;
}

export function transformSkill(
  skillData: SkillData | null | undefined,
): SkillData {
  if (!skillData) {
    return { level: 0, maxLevel: 50, xp: 0, xpForNext: 50, progress: 0 };
  }

  return {
    level: skillData.level || 0,
    maxLevel: skillData.maxLevel || 50,
    xp: skillData.xp || 0,
    xpForNext: skillData.xpForNext || 0,
    progress: skillData.progress || 0,
  };
}

export function transformSlayer(slayerData: SlayerData | null | undefined) {
  if (!slayerData) {
    return { level: 0, xp: 0 };
  }

  return {
    level: slayerData.level || 0,
    xp: slayerData.xp || 0,
  };
}

export function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatCoins(coins: number): string {
  if (coins >= 1000000000) {
    return `${(coins / 1000000000).toFixed(2)}B`;
  } else if (coins >= 1000000) {
    return `${(coins / 1000000).toFixed(2)}M`;
  } else if (coins >= 1000) {
    return `${(coins / 1000).toFixed(2)}K`;
  }
  return coins.toString();
}

export async function fetchSkyblockProfile(
  username: string,
): Promise<ProfileData> {
  if (!username) {
    throw new Error("Minecraft username not set");
  }

  const response = await fetch(
    `https://sky.shiiyu.moe/api/v2/profile/${username}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch profile: ${response.status}`);
  }

  const data = await response.json();

  const profileId = Object.keys(data.profiles).find(
    (key) => data.profiles[key].current,
  );

  if (!profileId) {
    throw new Error("No active profile found");
  }

  const profile = data.profiles[profileId].data;

  return {
    username: profile.display_name,
    uuid: profile.uuid,
    rank: profile.rank_prefix || "None",
    skyblock_level: profile.skyblock_level.level || 0,
    coins: profile.currencies.purse || 0,
    bank: profile.currencies.bank || 0,
    fairySouls: {
      collected: profile.fairy_souls.collected || 0,
      total: profile.fairy_souls.total || 0,
    },
    skills: {
      combat: transformSkill(profile.skills?.combat),
      mining: transformSkill(profile.skills?.mining),
      farming: transformSkill(profile.skills?.farming),
      foraging: transformSkill(profile.skills?.foraging),
      fishing: transformSkill(profile.skills?.fishing),
      enchanting: transformSkill(profile.skills?.enchanting),
      alchemy: transformSkill(profile.skills?.alchemy),
      taming: transformSkill(profile.skills?.taming),
      carpentry: transformSkill(profile.skills?.carpentry),
    },
    slayer: {
      zombie: transformSlayer(profile.slayer?.zombie),
      spider: transformSlayer(profile.slayer?.spider),
      wolf: transformSlayer(profile.slayer?.wolf),
      enderman: transformSlayer(profile.slayer?.enderman),
      blaze: transformSlayer(profile.slayer?.blaze),
    },
    stats: {
      health: profile.stats?.health || 0,
      defense: profile.stats?.defense || 0,
      strength: profile.stats?.strength || 0,
      speed: profile.stats?.speed || 0,
      critChance: profile.stats?.crit_chance || 0,
      critDamage: profile.stats?.crit_damage || 0,
      intelligence: profile.stats?.intelligence || 0,
    },
    networth: profile.networth?.networth || 0,
  };
}

export type { ProfileData, SkillData };
