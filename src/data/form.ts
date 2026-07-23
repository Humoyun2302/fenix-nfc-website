export const solutionOptions = [
  { value: 'menu', label: 'Электронное меню' },
  { value: 'plaques', label: 'NFC-таблички' },
  { value: 'cards', label: 'NFC-визитки' },
  { value: 'hotel', label: 'Решение для отеля' },
  { value: 'other', label: 'Другое' },
] as const

export type SolutionOptionValue = (typeof solutionOptions)[number]['value']

export type ContactFormData = {
  name: string
  phone: string
  company: string
  solution: SolutionOptionValue | ''
  quantity: string
  comment: string
  'bot-field': string
}

export const initialFormData: ContactFormData = {
  name: '',
  phone: '',
  company: '',
  solution: '',
  quantity: '',
  comment: '',
  'bot-field': '',
}
