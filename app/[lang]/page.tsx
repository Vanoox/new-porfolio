import TitleWithDescription from "@/components/TitleWithDescription";
import ServiceCard from "@/components/ServiceCard";
import SocialLinks from "@/components/SocialLinks";
import { BarbellIcon, MicrophoneIcon, TranslateIcon } from "@phosphor-icons/react/ssr";

export default function CentralHub() {
  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto gap-12 md:gap-16 pb-8">
      <section className="w-full flex flex-col items-center gap-8">
        <TitleWithDescription
          img="https://api.dicebear.com/7.x/notionists/svg?seed=John"
          alt="John Thoinn"
          classImg="w-28 h-28 rounded-full overflow-hidden mb-6 bg-foreground/15 ring-2 ring-ring"
          title="John Thoinn"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
        <SocialLinks />
      </section>

      <section aria-label="My Services" className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          <ServiceCard
            title="Voice Acting"
            description="Professional voiceover for commercials, anime, and corporate needs."
            href="/voice-acting"
            icon={<MicrophoneIcon size={32} />}
          />
          <ServiceCard
            title="Language Tutoring"
            description="Learn English and Japanese (日本語) with a tailored approach."
            href="/lessons"
            icon={<TranslateIcon size={32} />}
          />
          <ServiceCard
            title="Pilates & Fitness"
            description="Achieve your physical goals with custom training and wellness plans."
            href="/training"
            icon={<BarbellIcon size={32} />}
          />
        </div>
      </section>
    </div>
  );
}
