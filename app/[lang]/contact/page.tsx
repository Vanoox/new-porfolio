import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import { contactQuery, privacyPolicyQuery, settingsQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";

export default async function ContactPage(props: PageProps<"/[lang]/contact">) {
  const params = await props.params;

  const settings = await client.fetch(settingsQuery);
  const page = await client.fetch(contactQuery, { language: params.lang });
  const policy = await client.fetch(privacyPolicyQuery, { language: params.lang });

  if (settings === null || page === null || policy === null) {
    notFound();
  }

  return (
    <div className="w-full max-w-5xl flex-1 flex flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start flex-1">
        <ContactInfo email={settings.contactEmail} socials={settings.socials} />
        <ContactForm
          confirmTitle={page.confirmationMessage?.title ?? ""}
          confirmDescription={page.confirmationMessage?.description ?? ""}
          mainTitle={page.mainTitle ?? ""}
          name={page.contactForm?.nameField?.name ?? ""}
          namePlaceholder={page.contactForm?.nameField?.namePlaceholder ?? ""}
          email={page.contactForm?.emailField?.email ?? ""}
          emailPlaceholder={page.contactForm?.emailField?.emailPlaceholder ?? ""}
          topic={page.contactForm?.topicField?.title ?? ""}
          // topicField={page.contactForm?.topicField ?? ""} // błąd do poprawy
          message={page.contactForm?.messageField?.message ?? ""}
          messagePlaceholder={page.contactForm?.messageField?.messagePlaceholder ?? ""}
          sendButton={page.contactForm?.submitButton ?? ""}
          sendingMessage={page.confirmationMessage?.sendingMessage ?? ""}
          policyText={page.contactForm?.policyInforamation?.policyText ?? ""}
          policyLink={page.contactForm?.policyInforamation?.linkButton ?? ""}
          policyTitle={policy.mainTitle ?? ""}
          // policyDescription={policy.policyContent ?? ""} // błąd do poprawy
          policyAgreeButton={policy.confirmedButton ?? ""}
        />
      </div>
    </div>
  );
}
