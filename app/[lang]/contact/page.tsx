import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import { settingsQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";

export default async function ContactPage(props: PageProps<"/[lang]/contact">) {
  const params = await props.params;

  const settings = await client.fetch(settingsQuery);

  if (settings === null) {
    notFound();
  }

  return (
    <div className="w-full max-w-5xl flex-1 flex flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start flex-1">
        <ContactInfo email={settings.contactEmail} socials={settings.socials} />
        <ContactForm />
      </div>
    </div>
  );
}
