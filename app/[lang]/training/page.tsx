import TrainingCard from "@/components/training/TrainingCard";
import { DumbbellIcon, LotusIcon } from "@/components/Icons";

export default function TrainingPage() {
  return (
    <div className="w-full max-w-5xl flex-1 flex flex-col pt-4 pb-12">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-semibold text-gray-900 dark:text-white tracking-tight mb-4">
          Training & Wellness
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
          Unlock your body’s potential with a professional approach to fitness. Whether you need an intense personal
          training regimen to build strength or mindful pilates sessions to improve flexibility and core stability.
        </p>
      </div>
      <div className="flex flex-col gap-10">
        <TrainingCard
          title="1-on-1 Personal Training"
          description="Tailored workout plans designed to match your specific goals—from weight loss and muscle building to functional strength. Each session focuses on proper form, progressive overload, and continuous motivation to ensure you get the most out of your time in the gym."
          icon={<DumbbellIcon className="w-6 h-6" />}
          iconColorClass="bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400"
          hoverColorClass="hover:text-blue-600 dark:hover:text-blue-400"
          reverse={false}
        />

        <TrainingCard
          title="Private Pilates"
          description="A holistic approach focusing on core engagement, mobility, and injury prevention. My pilates sessions are perfect for all levels—whether you're an athlete looking to improve flexibility or a beginner wanting to build a solid foundation of posture and balance."
          icon={<LotusIcon className="w-6 h-6" />}
          iconColorClass="bg-teal-50 dark:bg-gray-700 text-teal-600 dark:text-teal-400"
          hoverColorClass="hover:text-teal-600 dark:hover:text-teal-400"
          reverse={true}
        />
      </div>
    </div>
  );
}
