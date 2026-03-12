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

export default function ContactInfo() {
  const socials = [
    { name: "Instagram", username: "@johnthoinn", url: "#", icon: InstagramLogoIcon },
    { name: "Tik Tok", username: "@johnthoinn", url: "#", icon: TiktokLogoIcon },
    { name: "YouTube", username: "@john_fitness", url: "#", icon: YoutubeLogoIcon },
    { name: "Twitch", username: "@john_fitness", url: "#", icon: TwitchLogoIcon },
    { name: "X", username: "@john_fitness", url: "#", icon: XLogoIcon },
  ];

  return (
    <section className="flex flex-col gap-6">
      <TitleWithDescription
        styleSection="flex flex-col items-start jutsify-start"
        title="Get in touch"
        description="Whether you want to discuss a potential voice acting project, book a private language lesson, or schedule a
        pilates training session, I'm here to help."
      ></TitleWithDescription>
      <div>
        <h3 className="text-lg text-foreground font-semibold">Direct Email</h3>
        <Link href="mailto:hello@johnthoinn.com" className="text-base text-muted-foreground leading-relaxed max-w-md">
          hello@johnthoinn.com
        </Link>
      </div>
      <div>
        <h3 className="text-lg text-foreground font-semibold mb-4">Social Media</h3>
        <div className="flex flex-col gap-3">
          {socials.map((social, idx) => (
            <Link href={social.url} key={idx} className="gap-4 hover:scale-103 transition duration-300">
              <Card className="flex flex-row items-center p-4">
                <social.icon />
                <div className="flex flex-1 flex-row items-center justify-between">
                  <CardTitle>{social.name}</CardTitle>
                  <CardDescription>{social.username}</CardDescription>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
