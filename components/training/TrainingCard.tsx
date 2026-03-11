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
  children: ReactNode;
};

export default function TrainingCard(props: TrainingCardProps) {
  return (
    <Card className={`flex flex-col px-6 overflow-hidden ${props.reverse ? "md:flex-row-reverse" : "md:flex-row"}`}>
      {props.children}
      <div className="flex flex-col gap-4 justify-center md:w-7/12">
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
