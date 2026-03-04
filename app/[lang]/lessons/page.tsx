import Link from "next/link";
import LanguageProfile from "@/components/lessons/LanguageProfile";
import LanguageDetails from "@/components/lessons/LanguageDetails";
import { ArrowRightIcon } from "@/components/icons";

export default function LanguageTutoringPage() {
  return (
    <div className="w-full max-w-5xl flex-1 flex flex-col pt-4 pb-4">
      
      {/* GÓRNA SEKCJA: Podział na 2 kolumny (Profil Lewo | Języki Prawo) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-start flex-1">
        
        {/* Lewa kolumna: Grafika/Zdjęcie i wprowadzenie */}
        <LanguageProfile />

        {/* Prawa kolumna: Szczegóły języków */}
        <LanguageDetails />

      </div>

      {/* DOLNA SEKCJA (Rozciągnięty na całą szerokość baner - jak na rysunku prostokątem) */}
      <div className="w-full mt-16 bg-gray-50 dark:bg-gray-800/50 rounded-[2rem] border border-gray-200 dark:border-gray-700 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-8 group">
        
        {/* Lewa część baneru z tekstem, można tu dodać flex-1 lub max-w, żeby lepiej się łamało */}
        <div className="max-w-xl text-left">
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Ready to start learning?
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            Reach out to discuss pricing, availability, and your personal goals. Whether you're a complete beginner or looking for advanced conversation practice, I'll tailor the lessons to your needs.
          </p>
        </div>
        
        {/* Prawa część z guzikiem wyrównanym w pionie i poziomie */}
        <Link 
          href="/contact" 
          className="shrink-0 w-full sm:w-auto bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 text-sm font-semibold px-8 py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-3"
        >
          Contact Me
          <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

    </div>
  );
}
