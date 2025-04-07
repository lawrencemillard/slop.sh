"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Presence } from "@/types/presence";
import { transformPresence } from "@/lib/presenceTransformer";

export function DiscordPresence() {
  const [presence, setPresence] = useState<Presence | null>(null);
  const [, setConnected] = useState(false);

  useEffect(() => {
    const ws = new WebSocket("ws://ws.slop.sh/presence");

    ws.onopen = () => {
      setConnected(true);
      console.log("Connected to Discord presence websocket");
    };

    ws.onmessage = (event) => {
      try {
        if (event.data === "pong") {
          console.debug("Received pong response");
          return;
        }

        if (event.data instanceof Blob) {
          event.data
            .text()
            .then((text) => {
              const data = JSON.parse(text);
              const transformedPresence = transformPresence(data);
              setPresence(transformedPresence);
            })
            .catch((error) => {
              console.error("Error reading Blob data:", error);
            });
        } else {
          const data = JSON.parse(event.data);
          const transformedPresence = transformPresence(data);
          setPresence(transformedPresence);
        }
      } catch (error) {
        if (event.data !== "pong") {
          console.error("Error processing presence data:", {
            error,
            rawData: event.data,
            dataType: typeof event.data,
          });
        }
      }
    };

    ws.onclose = () => {
      setConnected(false);
      console.log("Disconnected from Discord presence websocket");
    };

    const pingInterval = setInterval(() => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send("ping");
      }
    }, 5000);

    return () => {
      clearInterval(pingInterval);
      ws.close();
    };
  }, []);

  if (!presence) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{
        type: "spring",
        stiffness: 100,
      }}
    >
      <Card className="bg-background/60 backdrop-blur-md border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
        <CardContent className="p-6 space-y-5">
          <div className="flex items-center space-x-4">
            <Avatar
              className={`w-14 h-14 border-3 border-status-${presence.status} shadow-md transition-transform hover:scale-105`}
            >
              <AvatarImage
                src={presence.pfp}
                alt={presence.tag}
                className="object-cover"
              />
              <AvatarFallback className="bg-primary/10 text-primary font-medium">
                {presence.tag[0]}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-bold tracking-tight">
                {presence.tag}
              </h3>
              {presence.customStatus?.name && (
                <div className="flex items-center space-x-2 mt-1">
                  {presence.customStatus.emoji && (
                    <span className="text-base">
                      {presence.customStatus.emoji}
                    </span>
                  )}
                  <span className="text-sm text-muted-foreground/90 font-medium">
                    {presence.customStatus.name}
                  </span>
                </div>
              )}
            </div>
          </div>

          {presence.activities?.length > 0 && (
            <>
              <Separator className="opacity-50" />
              <div className="space-y-4">
                {presence.activities.map((activity, index) => (
                  <div
                    key={activity.applicationId || index}
                    className="flex items-center space-x-4 p-2 rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    {activity.assets?.largeImage && (
                      <Image
                        width={64}
                        height={64}
                        src={activity.assets.largeImage}
                        alt={activity.assets.largeText || activity.name}
                        className="w-16 h-16 rounded-lg object-cover shadow-md hover:shadow-lg transition-shadow"
                      />
                    )}
                    <div>
                      <h4 className="font-semibold text-primary/90">
                        {activity.name}
                      </h4>
                      {activity.details && (
                        <p className="text-sm text-muted-foreground/80 mt-1">
                          {activity.details}
                        </p>
                      )}
                      {activity.state && (
                        <p className="text-sm text-muted-foreground/70 mt-0.5">
                          {activity.state}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
