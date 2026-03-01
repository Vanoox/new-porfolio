import TrainerProfile from "@/components/training/TrainerProfile";
import WorkoutPlans from "@/components/training/WorkoutPlans";

export default function PilatesPage() {
  return (
    <div className="w-full max-w-5xl flex-1 flex flex-col pt-4">
      
      {/* Główny grid dzielący stronę na dwie równe lub proporcjonalne kolumny */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-start flex-1">
        
        {/* Lewa kolumna: Instruktorka */}
        <TrainerProfile />

        {/* Prawa kolumna: Plany treningowe i nagłówek Pilates */}
        <WorkoutPlans />

      </div>

    </div>
  );
}
