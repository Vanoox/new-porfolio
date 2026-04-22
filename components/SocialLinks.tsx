import { Button } from "./ui/button";
import Link from "next/link";
import {
  InstagramLogoIcon,
  TiktokLogoIcon,
  YoutubeLogoIcon,
  TwitchLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react/ssr";
import { Fragment } from "react/jsx-runtime";
import { Socials } from "@/lib/types";

type SocialLinksProps = {
  socials?: Socials;
};

export default function SocialLinks(props: SocialLinksProps) {
  const socials = [
    { name: "Instagram", url: props.socials?.instagram?.url, icon: <InstagramLogoIcon size={32} /> },
    { name: "TikTok", url: props.socials?.tiktok?.url, icon: <TiktokLogoIcon size={32} /> },
    { name: "YouTube", url: props.socials?.youtube?.url, icon: <YoutubeLogoIcon size={32} /> },
    { name: "Twitch", url: props.socials?.twitch?.url, icon: <TwitchLogoIcon size={32} /> },
    { name: "X", url: props.socials?.x?.url, icon: <XLogoIcon size={32} /> },
  ];

  return (
    <div className="flex items-center justify-center gap-4">
      {socials.map((social) => (
        <Fragment key={social.name}>
          {social.url && (
            <Button
              variant="ghost"
              size="icon"
              aria-label={social.name}
              className="[&_svg:not([class*='size-'])]:size-6"
              asChild
            >
              <Link href={social.url} target="_blank" rel="noopener noreferrer">
                {social.icon}
              </Link>
            </Button>
          )}
        </Fragment>
      ))}
    </div>
  );
}
