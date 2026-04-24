import Link from "next/link";
import TitleWithDescription from "../TitleWithDescription";
import { Card, CardDescription, CardTitle } from "../ui/card";
import {
  InstagramLogoIcon,
  TiktokLogoIcon,
  YoutubeLogoIcon,
  TwitchLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react/ssr";
import { Fragment } from "react/jsx-runtime";
import { Socials } from "@/lib/types";

type ContactInfoProps = {
  email?: string;
  socials?: Socials;
  mainTitle: string;
  mainDescription: string;
  emailTitle: string;
  socialsTitle: string;
};

export default function ContactInfo(props: ContactInfoProps) {
  const socials = [
    {
      name: "Instagram",
      handle: props.socials?.instagram?.handle,
      url: props.socials?.instagram?.url,
      icon: InstagramLogoIcon,
    },
    {
      name: "Tik Tok",
      handle: props.socials?.tiktok?.handle,
      url: props.socials?.tiktok?.url,
      icon: TiktokLogoIcon,
    },
    {
      name: "YouTube",
      handle: props.socials?.youtube?.handle,
      url: props.socials?.youtube?.url,
      icon: YoutubeLogoIcon,
    },
    {
      name: "Twitch",
      handle: props.socials?.twitch?.handle,
      url: props.socials?.twitch?.url,
      icon: TwitchLogoIcon,
    },
    {
      name: "X",
      handle: props.socials?.x?.handle,
      url: props.socials?.x?.url,
      icon: XLogoIcon,
    },
  ];

  return (
    <section className="flex flex-col gap-6">
      <TitleWithDescription
        styleSection="flex flex-col items-start jutsify-start"
        title={props.mainTitle}
        description={props.mainDescription}
      ></TitleWithDescription>
      <div>
        <h3 className="text-lg text-foreground font-semibold">{props.emailTitle}</h3>
        <Link href="mailto:hello@johnthoinn.com" className="text-base text-muted-foreground leading-relaxed max-w-md">
          {props.email}
        </Link>
      </div>
      <div>
        <h3 className="text-lg text-foreground font-semibold mb-4">{props.socialsTitle}</h3>
        <div className="flex flex-col gap-3">
          {socials.map((social, idx) => (
            <Fragment key={idx}>
              {social.url && (
                <Link href={social.url} className="gap-4 hover:scale-103 transition duration-300">
                  <Card className="flex flex-row items-center p-4">
                    <social.icon />
                    <div className="flex flex-1 flex-row items-center justify-between">
                      <CardTitle>{social.name}</CardTitle>
                      {social.handle && <CardDescription>{social.handle}</CardDescription>}
                    </div>
                  </Card>
                </Link>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
