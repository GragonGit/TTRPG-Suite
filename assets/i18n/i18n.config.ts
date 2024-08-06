import { de } from "./locale/de";
import { en } from "./locale/en";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    de
  },
}
))
