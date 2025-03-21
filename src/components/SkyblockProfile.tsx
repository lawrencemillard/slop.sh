"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

import {
  LuSword as Sword,
  LuHeart as Heart,
  LuShield as Shield,
  LuPickaxe as Pickaxe,
  LuAxe as Axe,
  LuShovel as Shovel,
  LuFish as Fishing,
  LuFlaskConical as Flask,
  LuSparkles as Sparkles,
  LuGem as Gem,
  LuCoins as Coins,
} from "react-icons/lu";

import {
  fetchSkyblockProfile,
  formatNumber,
  formatCoins,
  type ProfileData,
} from "@/lib/skyblockUtils";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export default function SkyblockProfile() {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const username = process.env.NEXT_PUBLIC_MINECRAFT_USERNAME || "";

  useEffect(() => {
    const getProfileData = async () => {
      if (!username) {
        setError("Minecraft username not set");
        setLoading(false);
        return;
      }

      try {
        const data = await fetchSkyblockProfile(username);
        setProfileData(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError(
          err instanceof Error
            ? err.message
            : "Failed to load Skyblock profile",
        );
        setLoading(false);
      }
    };

    getProfileData();
  }, [username]);

  if (loading) {
    return (
      <Card className="w-full max-w-[902px] mx-auto bg-background/50 backdrop-blur-sm border border-border shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-4">
            <Skeleton className="h-16 w-16 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-4 w-32" />
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-24 rounded-lg" />
              ))}
            </div>
            <Skeleton className="h-64 rounded-lg" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error || !profileData) {
    return (
      <Card className="w-full max-w-[902px] mx-auto bg-background/50 backdrop-blur-sm border border-border shadow-lg">
        <CardContent className="p-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-red-500">
              Error Loading Profile
            </h3>
            <p className="text-muted-foreground">
              {error || "Failed to load Skyblock profile"}
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full max-w-[902px] mx-auto"
    >
      <Card className="bg-background/50 backdrop-blur-sm border border-border shadow-lg overflow-hidden">
        <CardHeader className="pb-2">
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-start md:items-center gap-4"
          >
            <Avatar className="w-20 h-20 border border-border rounded">
              <AvatarImage
                src={`https://mc-heads.net/avatar/${profileData.uuid}`}
                alt={profileData.username}
              />
              <AvatarFallback>{profileData.username.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <CardTitle className="text-3xl font-bold flex items-center gap-2">
                <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  {profileData.username.charAt(0).toUpperCase() +
                    profileData.username.slice(1)}
                </span>
                {profileData.rank !== "None" && (
                  <h3 className="font-bold bg-gradient-to-r text-green-500">
                    VIP
                  </h3>
                )}
              </CardTitle>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Badge variant="outline" className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {profileData.fairySouls.collected}/
                  {profileData.fairySouls.total} Fairy Souls
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Gem className="w-3 h-3" />
                  {formatCoins(profileData.networth)} Net Worth
                </Badge>
              </div>
            </div>
          </motion.div>
        </CardHeader>

        <CardContent className="p-6 space-y-6">
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <Card className="bg-background/70">
              <CardContent className="p-4 flex items-center gap-3">
                <Coins className="w-10 h-10 text-yellow-500" />
                <div>
                  <p className="text-sm text-muted-foreground">Purse</p>
                  <p className="text-xl font-bold">
                    {formatCoins(profileData.coins)}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/70">
              <CardContent className="p-4 flex items-center gap-3">
                <Coins className="w-10 h-10 text-blue-500" />
                <div>
                  <p className="text-sm text-muted-foreground">Bank</p>
                  <p className="text-xl font-bold">
                    {formatCoins(profileData.bank)}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/70">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="flex gap-1">
                  <Heart className="w-5 h-5 text-red-500" />
                  <Shield className="w-5 h-5 text-blue-500" />
                  <Sword className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Stats</p>
                  <p className="text-xl font-bold">
                    {profileData.stats.health}❤ {profileData.stats.defense}🛡️
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Tabs defaultValue="skills" className="w-full">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="slayer">Slayer</TabsTrigger>
                <TabsTrigger value="stats">Stats</TabsTrigger>
              </TabsList>

              <TabsContent value="skills" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      name: "Combat",
                      icon: <Sword className="w-5 h-5 text-red-500" />,
                      skill: profileData.skills.combat,
                    },
                    {
                      name: "Mining",
                      icon: <Pickaxe className="w-5 h-5 text-gray-500" />,
                      skill: profileData.skills.mining,
                    },
                    {
                      name: "Farming",
                      icon: <Shovel className="w-5 h-5 text-yellow-600" />,
                      skill: profileData.skills.farming,
                    },
                    {
                      name: "Foraging",
                      icon: <Axe className="w-5 h-5 text-green-700" />,
                      skill: profileData.skills.foraging,
                    },
                    {
                      name: "Fishing",
                      icon: <Fishing className="w-5 h-5 text-blue-500" />,
                      skill: profileData.skills.fishing,
                    },
                    {
                      name: "Enchanting",
                      icon: <Sparkles className="w-5 h-5 text-purple-500" />,
                      skill: profileData.skills.enchanting,
                    },
                    {
                      name: "Alchemy",
                      icon: <Flask className="w-5 h-5 text-pink-500" />,
                      skill: profileData.skills.alchemy,
                    },
                    {
                      name: "Taming",
                      icon: <span className="text-lg">🐾</span>,
                      skill: profileData.skills.taming,
                    },
                  ].map((item, i) => (
                    <SkillCard
                      key={i}
                      name={item.name}
                      icon={item.icon}
                      level={item.skill.level}
                      maxLevel={item.skill.maxLevel}
                      progress={item.skill.progress}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="slayer" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      name: "Revenant Horror",
                      emoji: "🧟",
                      slayer: profileData.slayer.zombie,
                    },
                    {
                      name: "Tarantula Broodfather",
                      emoji: "🕷️",
                      slayer: profileData.slayer.spider,
                    },
                    {
                      name: "Sven Packmaster",
                      emoji: "🐺",
                      slayer: profileData.slayer.wolf,
                    },
                    {
                      name: "Voidgloom Seraph",
                      emoji: "👁️",
                      slayer: profileData.slayer.enderman,
                    },
                    {
                      name: "Inferno Demonlord",
                      emoji: "🔥",
                      slayer: profileData.slayer.blaze,
                    },
                  ].map((item, i) => (
                    <SlayerCard
                      key={i}
                      name={item.name}
                      emoji={item.emoji}
                      level={item.slayer.level}
                      xp={formatNumber(item.slayer.xp)}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="stats" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      name: "Health",
                      icon: <Heart className="w-5 h-5 text-red-500" />,
                      value: formatNumber(profileData.stats.health),
                    },
                    {
                      name: "Defense",
                      icon: <Shield className="w-5 h-5 text-blue-500" />,
                      value: formatNumber(profileData.stats.defense),
                    },
                    {
                      name: "Strength",
                      icon: <Sword className="w-5 h-5 text-orange-500" />,
                      value: formatNumber(profileData.stats.strength),
                    },
                    {
                      name: "Speed",
                      icon: <span className="text-lg">⚡</span>,
                      value: `${profileData.stats.speed}%`,
                    },
                    {
                      name: "Crit Chance",
                      icon: <span className="text-lg">🎯</span>,
                      value: `${profileData.stats.critChance}%`,
                    },
                    {
                      name: "Crit Damage",
                      icon: <span className="text-lg">💥</span>,
                      value: `${profileData.stats.critDamage}%`,
                    },
                    {
                      name: "Intelligence",
                      icon: <span className="text-lg">🧠</span>,
                      value: formatNumber(profileData.stats.intelligence),
                    },
                  ].map((item, i) => (
                    <StatCard
                      key={i}
                      name={item.name}
                      icon={item.icon}
                      value={item.value}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function SkillCard({
  name,
  icon,
  level,
  maxLevel,
  progress,
}: {
  name: string;
  icon: React.ReactNode;
  level: number;
  maxLevel: number;
  progress: number;
}) {
  return (
    <Card className="bg-background/70">
      <CardContent className="p-4 space-y-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {icon}
            <h3 className="font-medium">{name}</h3>
          </div>
          <div className="text-lg font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              {level}
            </span>
            <span className="text-muted-foreground text-sm">/{maxLevel}</span>
          </div>
        </div>
        <Progress value={progress * 100} className="h-2" />
      </CardContent>
    </Card>
  );
}

function SlayerCard({
  name,
  emoji,
  level,
  xp,
}: {
  name: string;
  emoji: string;
  level: number;
  xp: string;
}) {
  return (
    <Card className="bg-background/70">
      <CardContent className="p-4 space-y-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl">{emoji}</span>
            <h3 className="font-medium">{name}</h3>
          </div>
          <div className="text-lg font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              {level}
            </span>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">Total XP: {xp}</div>
      </CardContent>
    </Card>
  );
}

function StatCard({
  name,
  icon,
  value,
}: {
  name: string;
  icon: React.ReactNode;
  value: string;
}) {
  return (
    <Card className="bg-background/70">
      <CardContent className="p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="font-medium">{name}</h3>
        </div>
        <div className="text-lg font-bold">
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            {value}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
