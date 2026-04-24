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

export const voiceActingQuery = defineQuery(`
  *[_type == "voiceActing" && language == $language][0]{
    _id,
    mainTitle,
    mainDescription,

    audioSection{
      titleAudioSection,
      selectSong,
      audioFiles[]{
        'id': _key,
        'title': audioName,
        "src": file.asset->url,
      }
    },

    videoSection{
      titleVideoSection,
      viewYTButton,
    },
    
    language
  }
`);

export const lessonsQuery = defineQuery(`*[_type == "lessons" && language == $language][0] {
  _id,
  leftSide {
    title,
    description,
    image {
      asset->{
        url,
        metadata
      }
    }
  },
  rightSide {
    title,
    description,
    englishCard {
      title,
      description
    },
    japaneseCard {
      title,
      description
    }
  },
  contactCard {
    title,
    description,
    nameButton
  },
  language
}`);

export const trainingQuery = defineQuery(`*[_type == "training" && language == $language][0] {
  _id,
  mainTitle,
  mainDescription,
  personalTreningCard {
    title,
    description,
    button,
    image {
      asset->{
        url,
        metadata
      }
    }
  },
  pilatesTreningCard {
    title,
    description,
    button,
    image {
      asset->{
        url,
        metadata
      }
    }
  },
  language
}`);

export const contactQuery = defineQuery(`*[_type == "contact" && language == $language][0] {
  _id,
  mainTitle,
  mainDescription,
  emailTitle,
  socialsTitle,
  contactForm {
    formTitle,
    nameField {
      name,
      namePlaceholder
    },
    emailField {
      email,
      emailPlaceholder
    },
    topicField {
      title,
      topicPlaceholder,
      topicContent
    },
    messageField {
      message,
      messagePlaceholder
    },
    submitButton,
    policyInforamation {
      policyText,
      linkButton
    }
  },
  confirmationMessage {
    titleSuccess,
    descriptionSuccess,
    titleFailed,
    descriptionFailed,
    sendingMessage
  },
  language
}`);

export const privacyPolicyQuery = defineQuery(`*[_type == "privacyPolicy"&& language == $language][0] {
  _id,
  mainTitle,
  policyContent,
  confirmedButton,
  language
}`);

export const navigation = defineQuery(`*[_type == "navigation" && language == $language][0] {
  _id,
  navigations {
    home,
    voiceActing,
    lessons,
    training,
    contact
  },
  languageSwitcher,
  language
}`);
