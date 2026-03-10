"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react/ssr";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export type YouTubeVideo = {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
};

interface VideoReelClientProps {
  videos: YouTubeVideo[];
  channelId: string;
}

export default function VideoReelClient({ videos, channelId }: VideoReelClientProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!videos || videos.length === 0) return null;

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const activeVideo = videos[currentIndex];

  const truncateDesc = (text: string, max: number) => {
    if (text.length <= max) return text;
    return text.substring(0, max) + "...";
  };

  const channelUrl = `https://www.youtube.com/channel/${channelId}?sub_confirmation=1`;

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-sm font-semibold text-foreground">YouTube Showcase</h2>
        <div className="flex items-center gap-4">
          <Badge variant="secondary">
            {currentIndex + 1} / {videos.length}
          </Badge>
          <Link href={channelUrl}>
            <Button variant="ghost">
              View all <ArrowRightIcon size={18} />
            </Button>
          </Link>
        </div>
      </div>

      <Card className="w-full p-6">
        <div className="flex flex-row gap-6">
          <div className="flex flex-w relative rounded-2xl overflow-hidden aspect-video w-full">
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-inner">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?rel=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="w-full flex flex-col justify-between">
            <CardHeader className="px-0">
              <CardTitle>{activeVideo.title}</CardTitle>
              <CardDescription className="line-clamp-6 min-h-24">{activeVideo.description}</CardDescription>
            </CardHeader>
            <div className="flex items-center justify-between mt-4">
              <Button variant="ghost" onClick={prevVideo}>
                <ArrowLeftIcon size={32} />
              </Button>
              <Button variant="ghost" onClick={nextVideo}>
                <ArrowRightIcon size={32} />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
