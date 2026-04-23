import TrainingCard from "@/components/training/TrainingCard";
import { BarbellIcon, PersonSimpleTaiChiIcon } from "@phosphor-icons/react/dist/ssr";
import TitleWithDescription from "@/components/TitleWithDescription";
import { trainingQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";

export default async function TrainingPage(props: PageProps<"/[lang]">) {
  const params = await props.params;

  const page = await client.fetch(trainingQuery, { language: params.lang });

  if (page === null) {
    notFound();
  }

  return (
    <div className="w-full flex-1 flex flex-col gap-6">
      <div className="flex justify-center">
        <TitleWithDescription title={page.mainTitle ?? ""} description={page.mainDescription ?? ""} />
      </div>
      <div className="flex flex-col gap-6">
        <TrainingCard
          title={page.personalTreningCard?.title ?? ""}
          description={page.personalTreningCard?.description ?? ""}
          icon={<BarbellIcon size={42} />}
          hrefButton="/contact"
          buttonDescription={page.personalTreningCard?.button ?? ""}
          reverse={false}
          img={page.personalTreningCard?.image?.asset?.url ?? ""}
          alt=""
        />

        <TrainingCard
          title={page.pilatesTreningCard?.title ?? ""}
          description={page.pilatesTreningCard?.description ?? ""}
          icon={<PersonSimpleTaiChiIcon size={42} />}
          hrefButton="/contact"
          buttonDescription={page.pilatesTreningCard?.button ?? ""}
          reverse={true}
          img={page.pilatesTreningCard?.image?.asset?.url ?? ""}
          alt=""
        />
      </div>
    </div>
  );
}
