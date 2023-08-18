import ru from './ru.json';
import en from './en.json';

export enum Locale {
  En = 'en',
  Ru = 'ru',
}

const locales = {
  [Locale.En]: en,
  [Locale.Ru]: en,
};

type Translate = typeof ru;

export const getTranslate = (locale: Locale): Translate =>
  locales[locale] || locales.en;
