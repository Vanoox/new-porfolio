import { defineQuery } from "next-sanity";

export const settingsQuery = defineQuery(`*[_type == "settings"][0]`);

export const homeQuery = defineQuery(`
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
`);
