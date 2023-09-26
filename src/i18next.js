import i18next from "i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "uz",

    ns: ["default"],
    defaultNS: "default",
    debug: false,
    detection: {
      order: ["localStorage", "cookie", "htmlTag", "path", "subdomain"],
      caches: ["localStorage", "cookie"]
    },
    supportedLngs: ["uz", "ru", "en"],
    interpolation: {
      escapeValue: false
    },

    backend: {
      loadPath: '/translations/{{lng}}/default.json'
    }
  })
