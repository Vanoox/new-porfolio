import TitleWithDescription from "../TitleWithDescription";

type Props = {
  mainDescription: string;
  mainTitle: string;
  image: string;
};

export default function LanguageProfile(props: Props) {
  return (
    <section className="flex lg:flex-col flex-col-reverse w-full items-center mx-auto lg:mx-0">
      <div className="w-full rounded-4xl overflow-hidden mb-8 shadow-inner flex items-center justify-center relative">
        <img src={props.image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="m-6 lg:m-0">
        <TitleWithDescription title={props.mainTitle} description={props.mainDescription} />
      </div>
    </section>
  );
}

//
