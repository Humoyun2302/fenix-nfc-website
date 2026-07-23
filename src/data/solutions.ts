export const solutions = [
  {
    id: 'menu',
    title: 'Электронное меню',
    subtitle: 'Рестораны и кафе',
    description: 'Цифровое меню с фото и ценами. Гость открывает его касанием NFC.',
    features: ['NFC и QR', 'Несколько языков', 'Админ-панель'],
    visual: 'menu' as const,
  },
  {
    id: 'plaques',
    title: 'NFC-таблички',
    subtitle: 'Зал и сервис',
    description: 'Настольные таблички, которые ведут к меню, отзыву или оплате.',
    features: ['Меню', 'Отзывы', 'Оплата'],
    visual: 'plaque' as const,
  },
  {
    id: 'cards',
    title: 'NFC-визитки',
    subtitle: 'Команда и бренд',
    description: 'Контакты и соцсети — одним касанием смартфона.',
    features: ['Контакты', 'Соцсети', 'Портфолио'],
    visual: 'card' as const,
  },
] as const

export const processSteps = [
  {
    step: '01',
    title: 'Задача',
    description: 'Определяем формат и количество носителей.',
  },
  {
    step: '02',
    title: 'Дизайн',
    description: 'Собираем страницу и визуал под ваш бренд.',
  },
  {
    step: '03',
    title: 'NFC',
    description: 'Производим носители и программируем чипы.',
  },
  {
    step: '04',
    title: 'Запуск',
    description: 'Передаём готовое решение и доступ к панели.',
  },
] as const

export const offerIncludes = [
  'NFC-таблички',
  'Электронное меню',
  'Админ-панель',
  'Индивидуальный дизайн',
  'Настройка и запуск',
  'Без ежемесячной оплаты',
] as const
