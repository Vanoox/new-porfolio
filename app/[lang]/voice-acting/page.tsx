import TitleWithDescription from "@/components/TitleWithDescription";
import AudioSection from "@/components/voice-acting/AudioSection";
import VideoReel from "@/components/voice-acting/VideoReel";

export default function VoiceActingPage() {
  const tracks = [
    { id: "t1", title: "Commercial (EN)", src: "/sounds/sound1.mp3" },
    { id: "t2", title: "Narration (JP)", src: "/sounds/sound2.mp3" },
    { id: "t3", title: "Character (ES)", src: "/sounds/sound3.mp3" },
    { id: "t4", title: "Corporate (EN)", src: "/sounds/sound4.mp3" },
    { id: "t5", title: "E-Learning (PL)", src: "/sounds/sound5.mp3" },
    { id: "t6", title: "Audiobook (FR)", src: "/sounds/sound6.mp3" },
  ];

  return (
    <div className="w-full max-w-5xl flex-1 flex flex-col pt-4 pb-12">
      <div className="w-full max-w-5xl flex items-center justify-center p-8">
        <TitleWithDescription
          title="Voice Acting"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </div>
      <div className="">
        <div className="mb-2">
          <h2 className="text-sm font-semibold text-foreground">YouTube Showcase</h2>
        </div>
        <div className="w-full max-w-5xl mx-auto">
          <AudioSection tracks={tracks} defaultTrackId="t1" />
        </div>

        <div className="w-full max-w-5xl mx-auto">
          <VideoReel />
        </div>
      </div>
    </div>
  );
}
