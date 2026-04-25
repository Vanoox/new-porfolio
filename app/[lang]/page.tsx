import TitleWithDescription from "@/components/TitleWithDescription";
import ServiceCard from "@/components/ServiceCard";
import SocialLinks from "@/components/SocialLinks";
import { BarbellIcon, MicrophoneIcon, TranslateIcon } from "@phosphor-icons/react/ssr";
import { homeQuery, settingsQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";

export const revalidate = 3600;

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "pl" }, { lang: "jp" }];
}

export default async function CentralHub(props: PageProps<"/[lang]">) {
  const params = await props.params;

  const settings = await client.fetch(settingsQuery);
  const page = await client.fetch(homeQuery, { language: params.lang });

  if (settings === null || page === null) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center w-full mx-auto gap-12 md:gap-16">
      <section className="w-full flex flex-col items-center gap-8">
        <div className="flex flex-col items-center">
          {page.mainImageUrl && (
            <div className="w-28 h-28 rounded-full overflow-hidden mb-6 bg-foreground/15 ring-2 ring-ring">
              <img src={page.mainImageUrl} alt={page.mainTitle ?? ""} className="w-full h-full object-cover" />
            </div>
          )}

          <TitleWithDescription title={page.mainTitle ?? ""} description={page.mainDescription ?? ""} />
        </div>

        <SocialLinks socials={settings.socials} />
      </section>

      {page.cardsHome && page.cardsHome.length > 0 && (
        <section aria-label="My Services" className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
            {page.cardsHome[0] !== undefined && (
              <ServiceCard
                title={page.cardsHome[0].cardTitile ?? ""}
                description={page.cardsHome[0].cardDescription ?? ""}
                href="/voice-acting"
                icon={<MicrophoneIcon size={32} />}
              />
            )}

            {page.cardsHome[1] !== undefined && (
              <ServiceCard
                title={page.cardsHome[1].cardTitile ?? ""}
                description={page.cardsHome[1].cardDescription ?? ""}
                href="/lessons"
                icon={<TranslateIcon size={32} />}
              />
            )}

            {page.cardsHome[2] !== undefined && (
              <ServiceCard
                title={page.cardsHome[2].cardTitile ?? ""}
                description={page.cardsHome[2].cardDescription ?? ""}
                href="/training"
                icon={<BarbellIcon size={32} />}
              />
            )}
          </div>
        </section>
      )}
    </div>
  );
}
