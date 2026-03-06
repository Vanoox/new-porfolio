import AudioSection from "@/components/voice-acting/AudioSection";
import VideoReel from "@/components/voice-acting/VideoReel";

export type YouTubeVideo = {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
};

async function getLatestVideos(): Promise<YouTubeVideo[]> {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

  if (!API_KEY || !CHANNEL_ID) {
    console.warn("Brak kluczy YouTube API w .env.local!");
    return [];
  }

  try {
    const channelRes = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`,
      { next: { revalidate: 3600 } },
    );
    const channelData = await channelRes.json();

    if (!channelData.items || channelData.items.length === 0) return [];
    const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

    const playlistRes = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=5&key=${API_KEY}`,
      { next: { revalidate: 3600 } },
    );
    const playlistData = await playlistRes.json();

    return playlistData.items.map((item: any) => ({
      id: item.id,
      youtubeId: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      description: item.snippet.description || "Brak opisu",
    }));
  } catch (error) {
    console.error("Błąd podczas pobierania z YouTube API:", error);
    return [];
  }
}

export default async function VoiceActingPage() {
  const latestVideos = await getLatestVideos();

  const channelId = process.env.YOUTUBE_CHANNEL_ID || "UC...";

  const fallbackVideos: YouTubeVideo[] = [
    {
      id: "fallback-1",
      youtubeId: "dQw4w9WgXcQ",
      title: "Epic Movie Trailer Voiceover (Fallback)",
      description:
        "A dark and gritty voiceover session for an upcoming blockbuster trailer. Focused on deep tones and dramatic pauses.",
    },
    {
      id: "fallback-2",
      youtubeId: "jNQXAC9IVRw",
      title: "Upbeat Commercial Sample",
      description: "High energy, fast-paced read for a national beverage campaign.",
    },
  ];

  const videosToDisplay = latestVideos.length > 0 ? latestVideos : fallbackVideos;

  const tracks = [
    { id: "t1", title: "Commercial (EN)", src: "/audio/voice-1.mp3" },
    { id: "t2", title: "Narration (JP)", src: "/audio/voice-2.mp3" },
    { id: "t3", title: "Character (ES)", src: "/audio/voice-3.mp3" },
    { id: "t4", title: "Corporate (EN)", src: "/audio/voice-4.mp3" },
    { id: "t5", title: "E-Learning (PL)", src: "/audio/voice-5.mp3" },
    { id: "t6", title: "Audiobook (FR)", src: "/audio/voice-6.mp3" },
  ];

  return (
    <div className="w-full max-w-6xl flex flex-col flex-1 pb-4">
      <div className="mb-10 text-center shrink-0">
        <h1 className="text-4xl font-semibold text-gray-900 dark:text-white tracking-tight mb-4">Voice Acting</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">Dedicated entirely to audio demo player & studio.</p>
      </div>

      <div className="flex flex-col flex-1 gap-12">
        <div className="w-full">
          <AudioSection tracks={tracks} />
        </div>

        <div className="w-full shrink-0">
          <VideoReel videos={videosToDisplay} channelId={channelId} />
        </div>
      </div>
    </div>
  );
}
