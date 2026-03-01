import CalendarWidget from "@/components/lesson/CalendarWidget";
import PricingCards from "@/components/lesson/PricingCards";
import JapaneseBackground from "@/components/lesson/JapaneseBackground";

export default function LanguageTutoringPage() {
  return (
    <div className="w-full max-w-5xl relative min-h-[500px]">
      
      {/* Tło z japońskimi znakami (absolutne) */}
      <JapaneseBackground />

      {/* Nagłówek */}
      <div className="mb-12 relative z-10">
        <h1 className="text-4xl font-semibold text-gray-900 dark:text-white tracking-tight mb-3">
          Language Tutoring
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md">
          Dedicated to language tutoring education. Book your lesson below.
        </p>
      </div>

      {/* Główny kontent podzielony na dwie kolumny (Kalendarz i Płatności) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start relative z-10">
        <CalendarWidget />
        <PricingCards />
      </div>
      
    </div>
  );
}
