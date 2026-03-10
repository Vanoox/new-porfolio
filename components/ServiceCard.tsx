import { ReactNode } from "react";
import Link from "next/link";
import { Card, CardTitle, CardDescription, CardHeader } from "./ui/card";
type ServiceCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  href: string;
};

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <Link href={href}>
      <Card className="min-w-64 hover:scale-105 hover:text-primary transition-transform duration-300">
        <CardHeader className="flex flex-col justify-center items-center text-center">
          {icon}
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
