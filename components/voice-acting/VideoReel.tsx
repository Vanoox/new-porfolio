import VideoReelClient from "./VideoReelClient";

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
    return [];
  }
}

export default async function VideoReel() {
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

  return <VideoReelClient videos={videosToDisplay} channelId={channelId} />;
}
