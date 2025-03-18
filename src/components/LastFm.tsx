import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useLastFM } from "use-last-fm";
import { config } from "dotenv";
import { Skeleton } from "@/components/ui/skeleton";

config();

const LASTFM_API_KEY = process.env.NEXT_PUBLIC_LASTFM_API_KEY;
const LASTFM_USERNAME = process.env.NEXT_PUBLIC_LASTFM_USERNAME;

export default function LastFm() {
  const lastFM = useLastFM(LASTFM_USERNAME || "", LASTFM_API_KEY || "");
  const [showComponent, setShowComponent] = useState(false);
  const lastPlayedSongRef = useRef<typeof lastFM.song | null>(null);
  const [isCurrentlyPlaying, setIsCurrentlyPlaying] = useState<boolean>(false);

  useEffect(() => {
    setShowComponent(true);

    if (lastFM.status === "playing" && lastFM.song) {
      lastPlayedSongRef.current = lastFM.song;
      setIsCurrentlyPlaying(true);
    } else if (lastFM.status === "idle") {
      setIsCurrentlyPlaying(false);
    }
  }, [lastFM.status, lastFM.song]);

  if (!LASTFM_API_KEY || !LASTFM_USERNAME) {
    console.error("Last.fm API key or username not set");
    return null;
  }

  if (!showComponent || (!lastFM.song && !lastPlayedSongRef.current)) {
    return null;
  }

  const songToDisplay =
    lastFM.status === "playing" ? lastFM.song : lastPlayedSongRef.current;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-96"
      >
        <Card className="bg-card overflow-hidden">
          <CardContent className="p-6 flex flex-col sm:flex-row items-center h-24">
            {songToDisplay ? (
              <>
                <div className="sm:mb-0 sm:mr-4 -ml-2 w-16 h-16 hidden sm:block">
                  <Image
                    src={songToDisplay.art}
                    height={64}
                    width={64}
                    alt="Album Art"
                    className="rounded-sm"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-lg font-semibold">
                    {isCurrentlyPlaying
                      ? "Now listening to"
                      : "Last played song"}
                  </p>
                  <a
                    href={songToDisplay.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-lg hover:underline line-clamp-1"
                  >
                    {songToDisplay.name.split(/[\(\-]/)[0].trim()}
                  </a>
                  <span className="text-muted-foreground">
                    {" by "}
                    <span className="text-primary text-lg">
                      {songToDisplay.artist}
                    </span>
                  </span>
                </motion.div>
              </>
            ) : (
              <>
                <Skeleton className="h-16 w-16 sm:mb-0 sm:mr-4 -ml-2 rounded-sm hidden sm:block" />
                <div className="flex-1">
                  <Skeleton className="h-6 w-32 mb-1" />
                  <Skeleton className="h-6 w-48 mt-4" />
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
