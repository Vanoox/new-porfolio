import ProfileHeader from "@/components/ProfileHeader";
import ServiceCard from "@/components/ServiceCard";
import SocialLinks from "@/components/SocialLinks";
import { Dumbbell, Mic, Languages } from "lucide-react";

export default function CentralHub() {
  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto gap-12 md:gap-16 pb-8">
      <section className="w-full flex flex-col items-center gap-8">
        <ProfileHeader />
        <SocialLinks />
      </section>

      <section aria-label="My Services" className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          <ServiceCard
            title="Voice Acting"
            description="Professional voiceover for commercials, anime, and corporate needs."
            href="/voice-acting"
            icon={<Mic />}
          />
          <ServiceCard
            title="Language Tutoring"
            description="Learn English and Japanese (日本語) with a tailored approach."
            href="/lessons"
            icon={<Languages />}
          />
          <ServiceCard
            title="Pilates & Fitness"
            description="Achieve your physical goals with custom training and wellness plans."
            href="/training"
            icon={<Dumbbell />}
          />
        </div>
      </section>
    </div>
  );
}
