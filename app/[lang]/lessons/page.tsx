import Link from "next/link";
import LanguageProfile from "@/components/lessons/LanguageProfile";
import LanguageDetails from "@/components/lessons/LanguageDetails";
import { ArrowRightIcon } from "@phosphor-icons/react/ssr";
import { Card, CardDescription, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { lessonsQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";

export const revalidate = 3600;

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "pl" }, { lang: "jp" }];
}

export default async function LanguageTutoringPage(props: PageProps<"/[lang]">) {
  const params = await props.params;

  const page = await client.fetch(lessonsQuery, { language: params.lang });

  if (page === null) {
    notFound();
  }

  return (
    <div className="w-full max-w-5xl flex-1 flex flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-6">
        <LanguageProfile
          mainTitle={page.leftSide?.title ?? ""}
          mainDescription={page.leftSide?.description ?? ""}
          image={page.leftSide?.image?.asset?.url ?? ""}
        />
        <LanguageDetails
          mainDescription={page.rightSide?.description ?? ""}
          mainTitle={page.rightSide?.title ?? ""}
          englishCardTitle={page.rightSide?.englishCard?.title ?? ""}
          englishCardDescription={page.rightSide?.englishCard?.description ?? ""}
          japaneseCardTitle={page.rightSide?.japaneseCard?.title ?? ""}
          japaneseCardDescription={page.rightSide?.japaneseCard?.description ?? ""}
        />
      </div>
      <Card>
        <CardContent className="flex flex-col sm:flex-row items-center justify-between">
          <div className="max-w-xl text-left flex flex-col gap-2">
            <CardTitle className="text-xl">{page.contactCard?.title ?? ""}</CardTitle>
            <CardDescription className="leading-relaxed">{page.contactCard?.description ?? ""}</CardDescription>
          </div>
          <Button
            asChild
            size="lg"
            className="group shrink-0 w-full sm:w-auto px-8 py-6 text-sm font-semibold rounded-xl"
          >
            <Link href="/contact" className="flex items-center justify-center gap-3">
              {page.contactCard?.nameButton ?? "Contact Me"}
              <ArrowRightIcon />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
