import { groq } from "next-sanity";

export const homeQuery = groq`
  *[_type == "home" && language == $language][0]{
    "mainImageUrl": mainImage.asset->url,
    mainTitle,
    mainDescription,
    cardsHome[]{
      cardTitile,
      cardDescription
    },
    language
  }
`;
