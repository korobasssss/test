export type TranslationValues = Record<
  string,
  string | { [key: string]: TranslationValues | string }
>;
