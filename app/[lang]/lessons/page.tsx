import Link from "next/link";
import LanguageProfile from "@/components/lessons/LanguageProfile";
import LanguageDetails from "@/components/lessons/LanguageDetails";
import { ArrowRightIcon } from "@phosphor-icons/react/ssr";
import { Card, CardDescription, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LanguageTutoringPage() {
  return (
    <div className="w-full max-w-5xl flex-1 flex flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-6">
        <LanguageProfile />
        <LanguageDetails />
      </div>
      <Card>
        <CardContent className="flex flex-col sm:flex-row items-center justify-between">
          <div className="max-w-xl text-left flex flex-col gap-2">
            <CardTitle className="text-xl">Ready to start learning?</CardTitle>
            <CardDescription className="leading-relaxed">
              Reach out to discuss pricing, availability, and your personal goals. Whether you're a complete beginner or
              looking for advanced conversation practice, I'll tailor the lessons to your needs.
            </CardDescription>
          </div>
          <Button
            asChild
            size="lg"
            className="group shrink-0 w-full sm:w-auto px-8 py-6 text-sm font-semibold rounded-xl"
          >
            <Link href="/contact" className="flex items-center justify-center gap-3">
              Contact Me
              <ArrowRightIcon />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
