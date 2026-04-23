import TitleWithDescription from "@/components/TitleWithDescription";
import AudioSection, { Track } from "@/components/voice-acting/AudioSection";
import VideoReel from "@/components/voice-acting/VideoReel";
import { client } from "@/sanity/lib/client";
import { voiceActingQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

export default async function VoiceActingPage(props: PageProps<"/[lang]">) {
  const params = await props.params;
  const page = await client.fetch(voiceActingQuery, { language: params.lang });

  if (page === null) {
    notFound();
  }

  return (
    <div className="w-full max-w-5xl flex-1 flex flex-col">
      <div className="w-full max-w-5xl flex items-center justify-center p-8">
        <TitleWithDescription title={page.mainTitle ?? ""} description={page.mainDescription ?? ""} />
      </div>
      <div className="flex flex-col gap-6 md:gap-12">
        <div className="w-full max-w-5xl mx-auto">
          <AudioSection
            tracks={
              page.audioSection?.audioFiles?.filter(
                (file): file is Track => file.id !== null && file.title !== null && file.src !== null,
              ) ?? []
            }
            defaultTrackId={page.audioSection?.audioFiles?.[0]?.id}
            title={page.audioSection?.titleAudioSection ?? ""}
            selectSongString={page.audioSection?.selectSong ?? ""}
          />
        </div>

        <div className="w-full max-w-5xl mx-auto">
          <VideoReel
            title={page.videoSection?.titleVideoSection ?? ""}
            textButton={page.videoSection?.viewYTButton ?? ""}
          />
        </div>
      </div>
    </div>
  );
}
