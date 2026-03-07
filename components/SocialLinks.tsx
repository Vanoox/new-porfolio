import { InstagramIcon, YoutubeIcon, TwitchIcon, XIcon, TiktokIcon } from "@/components/Icons";
import { Button } from "./ui/button";
import Link from "next/link";

export default function SocialLinks() {
  const socials = [
    { name: "Instagram", url: "#", icon: <InstagramIcon /> },
    { name: "TikTok", url: "#", icon: <TiktokIcon /> },
    { name: "YouTube", url: "#", icon: <YoutubeIcon /> },
    { name: "Twitch", url: "#", icon: <TwitchIcon /> },
    { name: "X", url: "#", icon: <XIcon /> },
  ];

  return (
    <div className="flex items-center justify-center gap-4">
      {socials.map((social) => (
        <Button variant="ghost" size="icon" key={social.name} aria-label={social.name} asChild>
          <Link href={social.url} target="_blank" rel="noopener noreferrer">
            {social.icon}
          </Link>
        </Button>
      ))}
    </div>
  );
}
