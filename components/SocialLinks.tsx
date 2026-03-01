import React from 'react';
import { InstagramIcon, YoutubeIcon, TwitchIcon, XIcon, TiktokIcon } from '@/components/icons';

export default function SocialLinks() {
  const socials = [
    { name: "Instagram", url: "#", icon: <InstagramIcon className="w-5 h-5" /> },
    { name: "TikTok", url: "#", icon: <TiktokIcon className="w-5 h-5" /> },
    { name: "YouTube", url: "#", icon: <YoutubeIcon className="w-5 h-5" /> },
    { name: "Twitch", url: "#", icon: <TwitchIcon className="w-5 h-5" /> },
    { name: "X", url: "#", icon: <XIcon className="w-4 h-4" /> }, // XIcon jest z natury szerszy, więc w-4 wygląda proporcjonalniej
  ];

  return (
    <div className="flex items-center justify-center gap-4 mb-16">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          aria-label={social.name}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-500 shadow-sm hover:shadow transition-all duration-300 hover:-translate-y-1"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}
