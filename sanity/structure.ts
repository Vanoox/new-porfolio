import type { StructureResolver } from "sanity/structure";

const LANGUAGES = [
  { id: "pl", title: "Polish" },
  { id: "en", title: "English" },
  { id: "jp", title: "Japanese" },
];

const SINGLETONS = [{ id: "settings", _type: "settings", title: "Settings" }];

const LOCALIZED_SINGLETONS = [
  { id: "home", _type: "home", title: "Home" },
  { id: "voice-acting", _type: "voiceActing", title: "Voice Acting" },
  { id: "lessons", _type: "lessons", title: "Lessons" },
  { id: "training", _type: "training", title: "Training" },
  { id: "contact", _type: "contact", title: "Contact" },
  { id: "navigation", _type: "navigation", title: "Navigation" },
  { id: "privacy-policy", _type: "privacyPolicy", title: "Privacy Policy" },
];

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      ...LOCALIZED_SINGLETONS.map((singleton) =>
        S.listItem()
          .title(singleton.title)
          .id(singleton.id)
          .child(
            S.list()
              .title(singleton.title)
              .id(singleton.id)
              .items(
                LANGUAGES.map((language) =>
                  S.listItem()
                    .id(`${singleton.id}-${language.id}`)
                    .title(language.title)
                    .child(S.document().schemaType(singleton._type).id(`${singleton.id}-${language.id}`)),
                ),
              )
              .canHandleIntent((intentName, params) => intentName === "edit" && params.id.startsWith(singleton.id)),
          ),
      ),
      S.divider(),
      ...SINGLETONS.map((singleton) =>
        S.listItem()
          .id(singleton.id)
          .title(singleton.title)
          .child(S.document().schemaType(singleton._type).id(singleton.id)),
      ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![...SINGLETONS, ...LOCALIZED_SINGLETONS].map((s) => s._type).includes(listItem.getId() as string),
      ),
    ]);
