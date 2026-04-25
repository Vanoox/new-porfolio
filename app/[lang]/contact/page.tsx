import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import { contactQuery, privacyPolicyQuery, settingsQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";

export const revalidate = 3600;

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "pl" }, { lang: "jp" }];
}

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
        <ContactInfo
          email={settings.contactEmail}
          socials={settings.socials}
          mainTitle={page.mainTitle ?? ""}
          mainDescription={page.mainDescription ?? ""}
          emailTitle={page.emailTitle ?? ""}
          socialsTitle={page.socialsTitle ?? ""}
        />
        <ContactForm
          confirmTitleSuccess={page.confirmationMessage?.titleSuccess ?? ""}
          confirmDescriptionSucces={page.confirmationMessage?.descriptionSuccess ?? ""}
          confirmTitleFailed={page.confirmationMessage?.titleFailed ?? ""}
          confirmDescriptionFailed={page.confirmationMessage?.descriptionFailed ?? ""}
          mainTitle={page.mainTitle ?? ""}
          name={page.contactForm?.nameField?.name ?? ""}
          namePlaceholder={page.contactForm?.nameField?.namePlaceholder ?? ""}
          email={page.contactForm?.emailField?.email ?? ""}
          emailPlaceholder={page.contactForm?.emailField?.emailPlaceholder ?? ""}
          topic={page.contactForm?.topicField?.title ?? ""}
          topicPlaceholder={page.contactForm?.topicField?.topicPlaceholder ?? ""}
          topicField={page.contactForm?.topicField?.topicContent ?? []}
          message={page.contactForm?.messageField?.message ?? ""}
          messagePlaceholder={page.contactForm?.messageField?.messagePlaceholder ?? ""}
          sendButton={page.contactForm?.submitButton ?? ""}
          sendingMessage={page.confirmationMessage?.sendingMessage ?? ""}
          policyText={page.contactForm?.policyInforamation?.policyText ?? ""}
          policyLink={page.contactForm?.policyInforamation?.linkButton ?? ""}
          policyTitle={policy.mainTitle ?? ""}
          policyDescription={policy.policyContent}
          policyAgreeButton={policy.confirmedButton ?? ""}
        />
      </div>
    </div>
  );
}
