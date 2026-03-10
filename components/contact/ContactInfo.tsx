import Link from "next/link";
import TitleWithDescription from "../TitleWithDescription";

export default function ContactInfo() {
  const socials = [
    { name: "Instagram", username: "@johnthoinn", url: "#" },
    { name: "Tik Tok", username: "@johnthoinn", url: "#" },
    { name: "YouTube", username: "@john_fitness", url: "#" },
    { name: "Twitch", username: "@john_fitness", url: "#" },
    { name: "X", username: "@john_fitness", url: "#" },
  ];

  return (
    <section className="flex flex-col h-full w-full">
      <TitleWithDescription
        title="Get in touch"
        description="Whether you want to discuss a potential voice acting project, book a private language lesson, or schedule a
        pilates training session, I'm here to help."
      />
      <div className="mb-10">
        <h3 className="text-lg text-foreground font-semibold mb-4">Direct Email</h3>
        <Link href="mailto:hello@johnthoinn.com" className="text-base text-muted-foreground leading-relaxed max-w-md">
          hello@johnthoinn.com
        </Link>
      </div>
      <div>
        <h3 className="text-lg text-foreground font-semibold mb-4">Social Media</h3>
        <div className="flex flex-col gap-3">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              className="flex items-center justify-between p-4 rounded-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.20)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <span className="text-sm font-medium text-gray-900 dark:text-white">{social.name}</span>
              <span className="text-xs text-gray-400 group-hover:text-blue-500 transition-colors">
                {social.username}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
