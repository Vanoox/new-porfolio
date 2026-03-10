import TitleWithDescription from "../TitleWithDescription";

export default function LanguageProfile() {
  return (
    <section className="flex flex-col w-full max-w-[400px] mx-auto lg:mx-0">
      <TitleWithDescription
        img="/img/xd.jpeg"
        classImg="w-full aspect-[4/3] bg-gradient-to-b from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-800 rounded-[2rem] overflow-hidden mb-8 shadow-inner border border-blue-100 dark:border-gray-700 flex items-center justify-center relative"
        title="Language Tutoring"
        description="Unlock your potential with personalized language lessons. Whether you're starting from scratch or looking to perfect your business vocabulary, my tailored approach will help you reach your fluency goals."
      />
    </section>
  );
}

//
