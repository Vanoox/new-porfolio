import ProfileHeader from "@/components/ProfileHeader";
import ServiceCard from "@/components/ServiceCard";
import SocialLinks from "@/components/SocialLinks";
import { VoiceIcon, LanguageIcon, FitnessIcon } from "@/components/Icons";

export default function CentralHub() {
  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto gap-12 md:gap-16 pb-8">
      <section className="w-full flex flex-col items-center gap-8">
        <ProfileHeader />
        <SocialLinks />
      </section>

      <section aria-label="My Services" className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
          <ServiceCard
            title="Voice Acting"
            description="Professional voiceover for commercials, anime, and corporate needs."
            href="/voice-acting"
            icon={<VoiceIcon />}
          />
          <ServiceCard
            title="Language Tutoring"
            description="Learn English and Japanese (日本語) with a tailored approach."
            href="/lessons"
            icon={<LanguageIcon />}
          />
          <ServiceCard
            title="Pilates & Fitness"
            description="Achieve your physical goals with custom training and wellness plans."
            href="/training"
            icon={<FitnessIcon />}
          />
        </div>
      </section>
    </div>
  );
}
