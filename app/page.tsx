import ProfileHeader from '@/components/ProfileHeader';
import ServiceCard from '@/components/ServiceCard';
import { VoiceIcon, LanguageIcon, FitnessIcon } from '@/components/icons';

export default function CentralHub() {
  return (
    <div className="flex flex-col items-center w-full">
      <ProfileHeader />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        <ServiceCard 
          title="Voice Acting"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          href="/voice-acting"
          icon={<VoiceIcon />}
        />
        <ServiceCard 
          title="Japanese & English"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          href="/lessons"
          icon={<LanguageIcon />}
        />
        <ServiceCard 
          title="Pilates & Fitness"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          href="/pilates"
          icon={<FitnessIcon />}
        />
      </div>
    </div>
  );
}
