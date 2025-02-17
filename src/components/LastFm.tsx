import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useLastFM } from "use-last-fm";
import { config } from "dotenv";

config();

const LASTFM_API_KEY = process.env.NEXT_PUBLIC_LASTFM_API_KEY;
const LASTFM_USERNAME = process.env.NEXT_PUBLIC_LASTFM_USERNAME;

export default function LastFm() {
  const lastFM = useLastFM(LASTFM_USERNAME || "", LASTFM_API_KEY || "");

  if (!LASTFM_API_KEY || !LASTFM_USERNAME) {
    console.error("Last.fm API key or username not set");
    return null;
  }

  if (lastFM.status !== "playing" || !lastFM.song) {
    return null;
  }

  if (!lastFM.song.art) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="w-full max-w-96"
    >
      <Card className="bg-card">
        <CardContent className="p-6 flex flex-col sm:flex-row items-center h-24">
          <Image
            src={lastFM.song.art}
            height={64}
            width={64}
            alt="Album Art"
            className="sm:mb-0 sm:mr-4 -ml-2 rounded-sm hidden sm:block"
          />
          <div>
            <h3 className="text-lg font-semibold">Now listening to</h3>
            <div className="h-0.5 bg-border w-full max-w-[7.8rem]" />
            <a
              href={lastFM.song.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-lg hover:underline"
            >
              {lastFM.song.name.split(/[\(\-]/)[0].trim()}
            </a>
            <span className="text-muted-foreground">
              {} by{" "}
              <span className="text-primary text-lg">{lastFM.song.artist}</span>
            </span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
