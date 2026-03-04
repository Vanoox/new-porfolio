import ProfileHeader from '@/components/ProfileHeader';
import ServiceCard from '@/components/ServiceCard';
import SocialLinks from '@/components/SocialLinks';
import { VoiceIcon, LanguageIcon, FitnessIcon } from '@/components/icons';

export default function CentralHub() {
  return (
    <div className="flex flex-col items-center w-full">
      
      {/* Nagłówek profilu */}
      <div className="mb-8">
        <ProfileHeader />
      </div>

      {/* Ikony Social Media */}
      <SocialLinks />

      {/* Siatka Kart */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl ">
        <ServiceCard 
          title="Voice Acting"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          href="/voice-acting"
          icon={<VoiceIcon />}
        />
        <ServiceCard 
          title="Japanese & English"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          href="/languages"
          icon={<LanguageIcon />}
        />
        <ServiceCard 
          title="Pilates & Fitness"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          href="/training"
          icon={<FitnessIcon />}
        />
      </div>
      
    </div>
  );
}
