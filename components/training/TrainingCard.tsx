import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/ssr";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

type TrainingCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconColorClass: string;
  hoverColorClass: string;
  buttonDescription: string;
  hrefButton: string;
  reverse?: boolean;
};

export default function TrainingCard(props: TrainingCardProps) {
  return (
    <div>
      <Card
        className={`flex flex-col overflow-hidden rounded-[2.5rem] ${
          props.reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="relative min-h-[250px] md:min-h-full md:w-5/12 ">
          <img src="#" alt="#" className="absolute inset-0 w-full h-full object-cover" />
        </div>

        <div className="flex flex-col justify-center p-8 lg:p-12 md:w-7/12">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${props.iconColorClass}`}>
            {props.icon}
          </div>

          <CardHeader className="p-0 mb-8">
            <CardTitle className="text-2xl font-semibold mb-3">{props.title}</CardTitle>
            <CardDescription className="text-sm leading-relaxed">{props.description}</CardDescription>
          </CardHeader>

          <Link href={props.hrefButton} className="w-fit">
            <Button
              variant="ghost"
              className={`group gap-2 p-0 hover:bg-transparent text-sm font-semibold ${props.hoverColorClass}`}
            >
              {props.buttonDescription}
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
