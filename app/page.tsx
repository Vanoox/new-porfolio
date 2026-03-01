import Navbar from '@/components/Navbar';
import ProfileHeader from '@/components/ProfileHeader';
import ServiceCard from '@/components/ServiceCard';

export default function CentralHub() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-8">
      {/* Główny kontener - to również można wydzielić do layout.tsx, jeśli reszta podstron wygląda identycznie */}
      <div className="bg-white rounded-[2rem] shadow-xl w-full max-w-5xl overflow-hidden flex flex-col min-h-[600px]">
        <Navbar />
        
        <main className="flex-1 flex flex-col items-center justify-center px-6 py-4 mb-12">
          <ProfileHeader />

          {/* Siatka Kart */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            <ServiceCard 
              title="Voice Acting"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/voice-acting"
              icon={<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>}
            />
            <ServiceCard 
              title="Japanese & English"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/languages"
              icon={<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>}
            />
            <ServiceCard 
              title="Pilates & Fitness"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              href="/pilates"
              icon={<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/><path d="M4 12v-1c0-1.7 1.3-3 3-3h10c1.7 0 3 1.3 3 3v1"/><path d="M12 11v11"/><path d="M8 22h8"/></svg>}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
