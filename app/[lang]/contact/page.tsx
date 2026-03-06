import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="w-full max-w-5xl flex-1 flex flex-col pt-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-start flex-1">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}
