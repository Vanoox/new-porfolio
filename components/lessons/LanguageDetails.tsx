import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import TitleWithDescription from "../TitleWithDescription";

type Props = {
  mainDescription: string;
  mainTitle: string;
  englishCardTitle: string;
  englishCardDescription: string;
  japaneseCardTitle: string;
  japaneseCardDescription: string;
};

export default function LanguageDetails(props: Props) {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-between gap-6 md:gap-8 w-full">
        <TitleWithDescription description={props.mainDescription} title={props.mainTitle} />
        <Card className="w-full">
          <CardContent className="flex items-start gap-6">
            <div className="size-10 md:size-12 lg:size-16 shrink-0 rounded-full overflow-hidden flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-gb" viewBox="0 0 512 512">
                <path fill="#012169" d="M0 0h512v512H0z" />
                <path
                  fill="#FFF"
                  d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z"
                />
                <path
                  fill="#C8102E"
                  d="m184 324 11 34L42 512H0v-3zm124-12 54 8 150 147v45zM512 0 320 196l-4-44L466 0zM0 1l193 189-59-8L0 49z"
                />
                <path fill="#FFF" d="M176 0v512h160V0zM0 176v160h512V176z" />
                <path fill="#C8102E" d="M0 208v96h512v-96zM208 0v512h96V0z" />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <CardTitle>{props.englishCardTitle}</CardTitle>
              <CardDescription>{props.englishCardDescription}</CardDescription>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardContent className="flex items-start gap-6">
            <div className="size-10 md:size-12 lg:size-16 shrink-0 rounded-full overflow-hidden flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-jp" viewBox="0 0 512 512">
                <defs>
                  <clipPath id="jp-a">
                    <path fillOpacity=".7" d="M177.2 0h708.6v708.7H177.2z" />
                  </clipPath>
                </defs>
                <g fillRule="evenodd" strokeWidth="1pt" clipPath="url(#jp-a)" transform="translate(-128)scale(.72249)">
                  <path fill="#fff" d="M0 0h1063v708.7H0z" />
                  <circle
                    cx="523.1"
                    cy="344.1"
                    r="194.9"
                    fill="#bc002d"
                    transform="translate(-59.7 -34.5)scale(1.1302)"
                  />
                </g>
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <CardTitle>{props.englishCardTitle}</CardTitle>
              <CardDescription>{props.englishCardDescription}</CardDescription>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
