import React from 'react';

export default function ContactInfo() {
  const socials = [
    { name: "Twitter", username: "@johnthoinn", url: "#" },
    { name: "Instagram", username: "@johnthoinn", url: "#" },
    { name: "LinkedIn", username: "@john_fitness", url: "#" },
  ];

  return (
    <section className="flex flex-col h-full w-full">
      
      <h1 className="text-4xl font-semibold text-gray-900 dark:text-white mb-4 tracking-tight">
        Get in touch
      </h1>
      
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-10 max-w-md">
        Whether you want to discuss a potential voice acting project, book a private language lesson, or schedule a pilates training session, I'm here to help.
      </p>

      {/* Bezpośredni kontakt (Email) */}
      <div className="mb-10">
        <h3 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">
          Direct Email
        </h3>
        <a 
          href="mailto:hello@johnthoinn.com" 
          className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        >
          hello@johnthoinn.com
        </a>
      </div>

      {/* Media społecznościowe stylizowane jak tagi z sekcji Voice Acting */}
      <div>
        <h3 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
          Social Media
        </h3>
        <div className="flex flex-col gap-3">
          {socials.map((social, idx) => (
            <a 
              key={idx} 
              href={social.url}
              className="flex items-center justify-between p-4 rounded-2xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.20)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <span className="text-sm font-medium text-gray-900 dark:text-white">{social.name}</span>
              <span className="text-xs text-gray-400 group-hover:text-blue-500 transition-colors">{social.username}</span>
            </a>
          ))}
        </div>
      </div>

    </section>
  );
}
