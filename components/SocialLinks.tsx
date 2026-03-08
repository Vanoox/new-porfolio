import { Button } from "./ui/button";
import Link from "next/link";
import {
  InstagramLogoIcon,
  TiktokLogoIcon,
  YoutubeLogoIcon,
  TwitchLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react/ssr";

export default function SocialLinks() {
  const socials = [
    { name: "Instagram", url: "#", icon: <InstagramLogoIcon size={32} /> },
    { name: "TikTok", url: "#", icon: <TiktokLogoIcon size={32} /> },
    { name: "YouTube", url: "#", icon: <YoutubeLogoIcon size={32} /> },
    { name: "Twitch", url: "#", icon: <TwitchLogoIcon size={32} /> },
    { name: "X", url: "#", icon: <XLogoIcon size={32} /> },
  ];

  return (
    <div className="flex items-center justify-center gap-4">
      {socials.map((social) => (
        <Button
          variant="ghost"
          size="icon"
          key={social.name}
          aria-label={social.name}
          className="[&_svg:not([class*='size-'])]:size-6"
          asChild
        >
          <Link href={social.url} target="_blank" rel="noopener noreferrer">
            {social.icon}
          </Link>
        </Button>
      ))}
    </div>
  );
}
