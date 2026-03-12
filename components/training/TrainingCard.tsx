import { ReactNode } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/ssr";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

type TrainingCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  buttonDescription: string;
  hrefButton: string;
  reverse?: boolean;
  img: string;
  alt: string;
};

export default function TrainingCard(props: TrainingCardProps) {
  return (
    <Card
      className={`gap-0 lg:grid p-0 overflow-hidden ${
        props.reverse ? "lg:grid-cols-[minmax(0,4fr)_minmax(0,6fr)]" : "lg:grid-cols-[minmax(0,6fr)_minmax(0,4fr)]"
      }`}
    >
      <img
        src={props.img}
        alt={props.alt}
        className={`w-full h-full object-cover ${props.reverse ? "lg:order-last" : ""}`}
      />
      <div className="flex flex-col p-6 gap-4 justify-center">
        {props.icon}
        <CardHeader className="p-0">
          <CardTitle>{props.title}</CardTitle>
          <CardDescription>{props.description}</CardDescription>
        </CardHeader>

        <Link href={props.hrefButton} className="w-fit">
          <Button variant="ghost" className="p-0">
            {props.buttonDescription}
            <ArrowRightIcon />
          </Button>
        </Link>
      </div>
    </Card>
  );
}
