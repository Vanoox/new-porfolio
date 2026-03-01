import AudioSection from "@/components/voice-acting/AudioSection";
import LanguageTags from "@/components/voice-acting/LanguageTags";
import VideoReel from "@/components/voice-acting/VideoReel";

export default function VoiceActingPage() {
  // Dane zdefiniowane na najwyższym poziomie
  const tracks = [
    { id: "t1", title: "Commercial (EN)", src: "/audio/voice-1.mp3", duration: "00:09" },
    { id: "t2", title: "Narration (JP)", src: "/audio/voice-2.mp3", duration: "00:09" },
    { id: "t3", title: "Character (ES)", src: "/audio/voice-3.mp3", duration: "00:09" },
  ];

  const tags = ["English", "Spanish", "French", "Japanese", "Russian", "German", "Polish"];

  return (
    <div className="w-full max-w-5xl">
      {/* Nagłówek */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-semibold text-gray-900 dark:text-white tracking-tight">Voice Acting</h1>
        <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
          Dedicated entirely to audio demo player & studio.
        </p>
      </div>

      {/* Górna sekcja */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <AudioSection tracks={tracks} />
        <LanguageTags tags={tags} />
      </div>

      {/* Dolna sekcja */}
      <VideoReel />
    </div>
  );
}
