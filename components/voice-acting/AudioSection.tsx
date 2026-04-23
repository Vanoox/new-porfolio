"use client";

import { useState, useEffect, memo } from "react";
import { PauseIcon, PlayIcon, SpeakerLowIcon, SpeakerSimpleHighIcon, SpeakerXIcon } from "@phosphor-icons/react/ssr";

import { cn } from "@/lib/utils";
import {
  AudioPlayerButton,
  AudioPlayerDuration,
  AudioPlayerProgress,
  AudioPlayerProvider,
  AudioPlayerTime,
  useAudioPlayer,
} from "@/components/ui/audio-player";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export interface Track {
  id: string;
  title: string;
  src: string;
}

interface AudioSectionProps {
  tracks: Track[];
  defaultTrackId?: string;
  title?: string;
  selectSongString: string;
}

interface PlayerProps {
  selectSongString: string;
}

export default function AudioSection({ tracks, defaultTrackId, title, selectSongString }: AudioSectionProps) {
  return (
    <AudioPlayerProvider<Track>>
      <AudioSectionInner
        tracks={tracks}
        defaultTrackId={defaultTrackId}
        title={title}
        selectSongString={selectSongString}
      />
    </AudioPlayerProvider>
  );
}

const AudioSectionInner = ({ tracks, defaultTrackId, title, selectSongString }: AudioSectionProps) => {
  const player = useAudioPlayer<Track>();

  useEffect(() => {
    if (defaultTrackId && !player.activeItem) {
      const defaultTrack = tracks.find((t) => t.id === defaultTrackId);
      if (defaultTrack) {
      }
    }
  }, [defaultTrackId, tracks]);

  return (
    <>
      <div className="flex items-center mb-2 min-h-9">
        <h2 className="text-sm font-semibold text-foreground">{title}</h2>
      </div>
      <Card className="mx-auto w-full overflow-hidden p-0">
        <div className="flex flex-col lg:h-45 lg:flex-row">
          <div className="bg-muted/50 flex flex-col overflow-hidden lg:h-full lg:w-64">
            <ScrollArea className="h-48 w-full lg:h-full">
              <div className="space-y-1 p-3">
                {tracks.map((song, index) => (
                  <SongListItem key={song.id} song={song} trackNumber={index + 1} />
                ))}
              </div>
            </ScrollArea>
          </div>
          <Player selectSongString={selectSongString} />
        </div>
      </Card>
    </>
  );
};

const Player = ({ selectSongString }: PlayerProps) => {
  const player = useAudioPlayer<Track>();
  const [volume, setVolume] = useState(0.7);

  useEffect(() => {
    const audioEl = (player as any).ref?.current;
    if (audioEl) {
      audioEl.volume = volume;
    }
  }, [player, volume]);

  return (
    <div className="flex flex-1 items-center p-4 sm:p-6">
      <div className="mx-auto w-full max-w-2xl">
        <div className="mb-4">
          <h3 className="text-base font-semibold sm:text-lg">{player.activeItem?.data?.title ?? selectSongString}</h3>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <AudioPlayerButton
            variant="outline"
            size="default"
            className="h-12 w-12 shrink-0 sm:h-10 sm:w-10"
            disabled={!player.activeItem}
          />
          <div className="flex flex-1 items-center gap-2 sm:gap-3">
            <AudioPlayerTime className="text-xs tabular-nums" />
            <AudioPlayerProgress className="flex-1" />
            <AudioPlayerDuration className="text-xs tabular-nums" />

            <div className="ml-2 hidden sm:block">
              <VolumeSlider volume={volume} setVolume={setVolume} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const VolumeSlider = memo(
  ({ volume, setVolume }: { volume: number; setVolume: (value: number | ((prev: number) => number)) => void }) => {
    const [isDragging, setIsDragging] = useState(false);

    const getVolumeIcon = () => {
      if (volume === 0) return SpeakerXIcon;
      if (volume < 0.33) return SpeakerLowIcon;
      if (volume < 0.66) return SpeakerSimpleHighIcon;
      return SpeakerSimpleHighIcon;
    };

    const VolumeIcon = getVolumeIcon();

    return (
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => setVolume((prev: number) => (prev === 0 ? 0.7 : 0))}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <VolumeIcon className={cn("h-4 w-4 transition-all", volume === 0 && "text-muted-foreground/50")} />
        </button>
        <div
          className="bg-foreground/10 group relative h-1 w-20 cursor-pointer rounded-full"
          onClick={(e) => {
            if (isDragging) return;
            const rect = e.currentTarget.getBoundingClientRect();
            const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
            setVolume(x);
          }}
          onMouseDown={(e) => {
            e.preventDefault();
            setIsDragging(true);
            const sliderRect = e.currentTarget.getBoundingClientRect();
            const initialX = Math.max(0, Math.min(1, (e.clientX - sliderRect.left) / sliderRect.width));
            setVolume(initialX);

            const handleMove = (e: MouseEvent) => {
              const x = Math.max(0, Math.min(1, (e.clientX - sliderRect.left) / sliderRect.width));
              setVolume(x);
            };

            const handleUp = () => {
              setIsDragging(false);
              document.removeEventListener("mousemove", handleMove);
              document.removeEventListener("mouseup", handleUp);
            };

            document.addEventListener("mousemove", handleMove);
            document.addEventListener("mouseup", handleUp);
          }}
        >
          <div
            className={cn(
              "bg-primary absolute top-0 left-0 h-full rounded-full",
              !isDragging && "transition-all duration-150",
            )}
            style={{ width: `${volume * 100}%` }}
          />
        </div>
      </div>
    );
  },
);
VolumeSlider.displayName = "VolumeSlider";

const SongListItem = ({ song, trackNumber }: { song: Track; trackNumber: number }) => {
  const player = useAudioPlayer<Track>();
  const isActive = player.isItemActive(song.id);
  const isCurrentlyPlaying = isActive && player.isPlaying;

  return (
    <div className="group/song relative">
      <Button
        variant={isActive ? "secondary" : "ghost"}
        size="sm"
        className={cn("h-10 w-full justify-start px-3 font-normal sm:h-9 sm:px-2", isActive && "bg-secondary")}
        onClick={() => {
          if (isCurrentlyPlaying) {
            player.pause();
          } else {
            player.setActiveItem({
              id: song.id,
              src: song.src,
              data: song,
            });
          }
        }}
      >
        <div className="flex w-full items-center gap-3">
          <div className="flex w-5 shrink-0 items-center justify-center">
            {isCurrentlyPlaying ? (
              <PauseIcon className="h-4 w-4 sm:h-3.5 sm:w-3.5" />
            ) : (
              <>
                <span className="text-muted-foreground/60 text-sm tabular-nums group-hover/song:invisible">
                  {trackNumber}
                </span>
                <PlayIcon className="invisible absolute h-4 w-4 group-hover/song:visible sm:h-3.5 sm:w-3.5" />
              </>
            )}
          </div>
          <span className="truncate text-left text-sm">{song.title}</span>
        </div>
      </Button>
    </div>
  );
};
