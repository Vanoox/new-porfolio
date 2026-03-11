import TrainingCard from "@/components/training/TrainingCard";
import { BarbellIcon, PersonSimpleTaiChiIcon } from "@phosphor-icons/react/dist/ssr";
import TitleWithDescription from "@/components/TitleWithDescription";

export default function TrainingPage() {
  return (
    <div className="w-full flex-1 flex flex-col gap-6">
      <div className="flex justify-center">
        <TitleWithDescription
          title="Training & Wellness"
          description="Unlock your body’s potential with a professional approach to fitness. Whether you need an intense personal training regimen to build strength or mindful pilates sessions to improve flexibility and core stability."
        />
      </div>
      <div className="flex flex-col gap-6">
        <TrainingCard
          title="1-on-1 Personal Training"
          description="Tailored workout plans designed to match your specific goals—from weight loss and muscle building to functional strength. Each session focuses on proper form, progressive overload, and continuous motivation to ensure you get the most out of your time in the gym."
          icon={<BarbellIcon size={42} />}
          hrefButton="/contact"
          buttonDescription="Book a session"
          reverse={false}
        >
          <div className="rounded-2xl flex items-center justify-center">
            <img src="/img/pt.jpg" alt="" />
          </div>
        </TrainingCard>
        <TrainingCard
          title="Private Pilates"
          description="A holistic approach focusing on core engagement, mobility, and injury prevention. My pilates sessions are perfect for all levels—whether you're an athlete looking to improve flexibility or a beginner wanting to build a solid foundation of posture and balance."
          icon={<PersonSimpleTaiChiIcon size={42} />}
          hrefButton="/contact"
          buttonDescription="Book a session"
          reverse={true}
        >
          <div className="rounded-2xl flex items-center justify-center">
            <img src="/img/pilates.jpg" alt="" />
          </div>
        </TrainingCard>
      </div>
    </div>
  );
}
