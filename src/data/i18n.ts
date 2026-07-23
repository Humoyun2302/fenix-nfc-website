/**
 * Lightweight i18n-ready dictionary.
 * Current locale: Russian (ru).
 * Add `uz` and `en` keys later and switch via locale provider.
 */
export const copy = {
  ru: {
    ctaPrimary: 'Заказать решение',
    ctaSecondary: 'Посмотреть, как работает',
    ctaConsult: 'Получить консультацию',
    ctaQuote: 'Получить расчёт',
    ctaTouch: 'Коснуться NFC',
    formSuccess: 'Заявка отправлена. Мы свяжемся с вами в ближайшее время.',
    formError: 'Не удалось отправить заявку. Попробуйте ещё раз или напишите нам напрямую.',
    formLoading: 'Отправляем…',
    backToTop: 'Наверх',
  },
} as const

export type AppLocale = keyof typeof copy

export const defaultLocale: AppLocale = 'ru'

export function t(key: keyof (typeof copy)['ru'], locale: AppLocale = defaultLocale) {
  return copy[locale][key]
}
