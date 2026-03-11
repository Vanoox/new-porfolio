import TitleWithDescription from "../TitleWithDescription";

export default function LanguageProfile() {
  return (
    <section className="flex lg:flex-col flex-col-reverse w-full items-center mx-auto lg:mx-0">
      <div className="w-full rounded-4xl overflow-hidden mb-8 shadow-inner flex items-center justify-center relative">
        <img src="/img/xd.jpeg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="m-6 lg:m-0">
        <TitleWithDescription
          title="Language Tutoring"
          description="Unlock your potential with personalized language lessons. Whether you're starting from scratch or looking to perfect your business vocabulary, my tailored approach will help you reach your fluency goals."
        />
      </div>
    </section>
  );
}

//
