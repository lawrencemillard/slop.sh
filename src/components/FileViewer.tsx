"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, FileIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface FileViewerProps {
  id: string;
  contentType: string;
  contentLength?: string | null;
}

export default function FileViewer({
  id,
  contentType,
  contentLength,
}: FileViewerProps) {
  const [previewType, setPreviewType] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const fileUrl = `/api/files/${id}`;

  const formatFileSize = (bytes: string | null | undefined) => {
    if (!bytes) return "Unknown size";
    const size = parseInt(bytes);
    if (size < 1024) return `${size} B`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
  };

  const tryImage = () => {
    const img = new Image();
    img.onload = () => {
      setPreviewType("image");
      setIsLoading(false);
    };
    img.onerror = tryVideo;
    img.src = fileUrl;
  };

  const tryVideo = () => {
    const video = document.createElement("video");
    video.onloadeddata = () => {
      setPreviewType("video");
      setIsLoading(false);
    };
    video.onerror = tryAudio;
    video.src = fileUrl;
  };

  const tryAudio = () => {
    const audio = document.createElement("audio");
    audio.onloadeddata = () => {
      setPreviewType("audio");
      setIsLoading(false);
    };
    audio.onerror = tryText;
    audio.src = fileUrl;
  };

  const tryText = async () => {
    try {
      const response = await fetch(fileUrl);
      const text = await response.text();
      if (
        text &&
        text.length > 0 &&
        /^[\x00-\x7F]*$/.test(text.slice(0, 1000))
      ) {
        setPreviewType("text");
      } else {
        setPreviewType("none");
      }
    } catch {
      setPreviewType("none");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    tryImage();
  }, [fileUrl]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col align-center justify-center max-w-4xl mx-auto items-center mt-[25vh]"
    >
        <h1 className="text-3xl font-bold mb-4">Slop.sh</h1>
      <Card className="overflow-hidden">
        <CardContent className="p-6">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center py-12"
              >
                <div className="animate-pulse text-muted-foreground">
                  Detecting file type...
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {previewType === "image" && (
                  <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                    <img
                      src={fileUrl}
                      alt={`Preview of ${id}`}
                      className="object-contain w-full h-full"
                    />
                  </div>
                )}

                {previewType === "video" && (
                  <video controls className="w-full rounded-lg">
                    <source src={fileUrl} />
                    Your browser does not support the video tag.
                  </video>
                )}

                {previewType === "audio" && (
                  <audio controls className="w-full">
                    <source src={fileUrl} />
                    Your browser does not support the audio tag.
                  </audio>
                )}

                {previewType === "text" && (
                  <iframe
                    src={fileUrl}
                    title={`Text content of ${id}`}
                    className="w-full h-[400px] rounded-lg border bg-muted"
                  />
                )}

                {previewType === "none" && (
                  <div className="flex flex-col items-center justify-center py-12 space-y-4">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <FileIcon className="w-16 h-16 text-muted-foreground" />
                    </motion.div>
                    <div className="text-center space-y-2">
                      <p className="text-lg font-medium">
                        This file type cannot be previewed
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {contentType} • {formatFileSize(contentLength)}
                      </p>
                    </div>
                  </div>
                )}

                <div className="mt-6 flex justify-center">
                  <Button asChild>
                    <a href={fileUrl} download={id}>
                      <Download className="mr-2 h-4 w-4" />
                      Download {id}
                    </a>
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
}
