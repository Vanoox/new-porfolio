import AudioSection from "@/components/voice-acting/AudioSection";
import VideoReel from "@/components/voice-acting/VideoReel";

// Definicja typu dla pojedynczego wideo
export type YouTubeVideo = {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
};

// Funkcja fetchująca dane z YouTube API po stronie serwera
async function getLatestVideos(): Promise<YouTubeVideo[]> {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

  if (!API_KEY || !CHANNEL_ID) {
    console.warn("Brak kluczy YouTube API w .env.local!");
    return []; // Zwróci puste lub użyje fallbacku niżej
  }

  try {
    // 1. Krok pierwszy: Pobieramy ID playlisty "Uploads" przypisanej do kanału
    const channelRes = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`,
      { next: { revalidate: 3600 } } // Cache na 1 godzinę, by nie wyczerpać limitów API
    );
    const channelData = await channelRes.json();
    
    if (!channelData.items || channelData.items.length === 0) return [];
    const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

    // 2. Krok drugi: Pobieramy 5 najnowszych wideo z tej playlisty
    const playlistRes = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=5&key=${API_KEY}`,
      { next: { revalidate: 3600 } }
    );
    const playlistData = await playlistRes.json();

    // Mapujemy surowy wynik API do naszego zgrabnego formatu
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
  // Czekamy na pobranie danych z YouTube
  const latestVideos = await getLatestVideos();
  
  // Zabezpieczenie ID kanału do przekazania dla przycisku "View all"
  const channelId = process.env.YOUTUBE_CHANNEL_ID || "UC...";

  // Awaryjne dane (fallback), gdyby API zawiodło, klucz wygasł lub nie został skonfigurowany
  const fallbackVideos: YouTubeVideo[] = [
    {
      id: "fallback-1",
      youtubeId: "dQw4w9WgXcQ", // Możesz to podmienić na swoje topowe wideo
      title: "Epic Movie Trailer Voiceover (Fallback)",
      description: "A dark and gritty voiceover session for an upcoming blockbuster trailer. Focused on deep tones and dramatic pauses."
    },
    {
      id: "fallback-2",
      youtubeId: "jNQXAC9IVRw",
      title: "Upbeat Commercial Sample",
      description: "High energy, fast-paced read for a national beverage campaign."
    }
  ];

  // Używamy pobranych wideo z API. Jeśli API zwróciło pusto, używamy fallbacku.
  const videosToDisplay = latestVideos.length > 0 ? latestVideos : fallbackVideos;

  // Lista 9 utworów audio z rozszerzeniami
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
      
      {/* Nagłówek */}
      <div className="mb-10 text-center shrink-0">
        <h1 className="text-4xl font-semibold text-gray-900 dark:text-white tracking-tight mb-4">Voice Acting</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Dedicated entirely to audio demo player & studio.
        </p>
      </div>

      <div className="flex flex-col flex-1 gap-12">
        {/* Sekcja Audio rozciągnięta na 100% (Renderuje siatkę 3x3) */}
        <div className="w-full">
          <AudioSection tracks={tracks} />
        </div>

        {/* Sekcja Video Reel */}
        <div className="w-full shrink-0">
          {/* Przekazujemy pobrane filmy oraz ID kanału do karuzeli */}
          <VideoReel videos={videosToDisplay} channelId={channelId} />
        </div>
      </div>
      
    </div>
  );
}
