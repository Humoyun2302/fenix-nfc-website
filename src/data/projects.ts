export type Project = {
  id: string
  title: string
  category: string
  description: string
  result: string
  image: string
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 'restaurant-menu',
    title: 'NFC-меню для ресторана',
    category: 'Электронное меню',
    description:
      'Цифровое меню с категориями, фотографиями блюд и быстрым обновлением цен через админ-панель.',
    result: 'Гости открывают меню одним касанием, персонал меньше тратит время на объяснения.',
    image: '/images/projects/restaurant-menu.svg',
    tags: ['Ресторан', 'NFC', 'QR'],
  },
  {
    id: 'table-plaque',
    title: 'Настольная NFC-табличка',
    category: 'NFC-таблички',
    description:
      'Премиальная табличка для столов: меню, отзывы и вызов официанта в одном носителе.',
    result: 'Аккуратный сервисный сценарий без лишних печатных материалов на столе.',
    image: '/images/projects/table-plaque.svg',
    tags: ['Кафе', 'Сервис', 'Дизайн'],
  },
  {
    id: 'business-card',
    title: 'Премиальная NFC-визитка',
    category: 'NFC-визитки',
    description:
      'Металлическая визитка с цифровым профилем: контакты, Instagram, Telegram и портфолио.',
    result: 'Контакт сохраняется в телефон за секунду — без обмена бумажными карточками.',
    image: '/images/projects/business-card.svg',
    tags: ['Личный бренд', 'B2B'],
  },
  {
    id: 'hotel-solution',
    title: 'Решение для отеля',
    category: 'Отели',
    description:
      'Набор NFC-точек: сервисы номера, Wi-Fi, завтрак, отзывы и быстрая связь с ресепшеном.',
    result: 'Гости самостоятельно находят нужные сервисы, нагрузка на стойку снижается.',
    image: '/images/projects/hotel-solution.svg',
    tags: ['Отель', 'Сервисы'],
  },
]
