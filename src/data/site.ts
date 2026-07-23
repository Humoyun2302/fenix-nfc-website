export const siteConfig = {
  name: 'FENIX NFC',
  tagline: 'NFC-решения для современного бизнеса',
  description: 'NFC-таблички, цифровые визитки и электронные меню для бизнеса.',
  url: 'https://fenix-nfc-website.netlify.app',
  locale: 'ru',
  contacts: {
    phone: '+998 90 000 00 00',
    phoneHref: 'tel:+998900000000',
    email: 'hello@fenixnfc.uz',
    emailHref: 'mailto:hello@fenixnfc.uz',
    address: 'Ташкент, Узбекистан',
    instagram: 'https://instagram.com/fenixnfc',
    telegram: 'https://t.me/fenixnfc',
    workingHours: 'Пн–Сб, 10:00–19:00',
  },
  offer: {
    title: 'Электронное меню для 10 столов',
    price: 'от $200',
    leadTime: 'от 7 дней',
  },
} as const

export const navLinks = [
  { id: 'hero', label: 'Главная', href: '#hero' },
  { id: 'solutions', label: 'Решения', href: '#solutions' },
  { id: 'how-it-works', label: 'Как это работает', href: '#how-it-works' },
  { id: 'demo', label: 'Демо', href: '#demo' },
  { id: 'offer', label: 'Цена', href: '#offer' },
  { id: 'contact', label: 'Заявка', href: '#contact' },
] as const
