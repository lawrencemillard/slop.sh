import {
  Presence,
  Activity,
  RawActivityData,
  RawPresenceData,
} from "@/types/presence";

export const transformActivity = (activity: RawActivityData): Activity => {
  return {
    applicationId: activity.applicationId || "",
    details: activity.details || "",
    emoji: activity.emoji || "",
    name: activity.name || "",
    state: activity.state || "",
    title: activity.title || "",
    type: activity.type || "",
    timestamps: {
      start: activity.timestamps?.start
        ? new Date(activity.timestamps.start)
        : null,
      end: activity.timestamps?.end ? new Date(activity.timestamps.end) : null,
    },
    assets: {
      largeImage: activity.assets?.largeImage || null,
      smallImage: activity.assets?.smallImage || null,
      largeText: activity.assets?.largeText || null,
      smallText: activity.assets?.smallText || null,
    },
  };
};

export const transformPresence = (data: RawPresenceData): Presence => {
  const platform =
    typeof data.platform === "object" && data.platform !== null
      ? Object.entries(data.platform).map(([key, value]) => `${key}:${value}`)
      : [];

  return {
    _id: data._id || "",
    tag: data.tag || "",
    pfp: data.pfp || "",
    platform,
    status: data.status || "offline",
    activities: (data.activities || []).map(transformActivity),
    badges: data.badges || [],
    customStatus: {
      name: data.customStatus?.name || "",
      createdTimestamp: data.customStatus?.createdTimestamp || 0,
      emoji: data.customStatus?.emoji || "",
    },
  };
};
