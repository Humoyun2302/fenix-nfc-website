# FENIX NFC Website

Премиальный лендинг бренда **FENIX NFC** — NFC-таблички, электронные меню и цифровые визитки для бизнеса.

Стек: React, TypeScript, Vite, Tailwind CSS, Framer Motion, Lucide React.

## Установка

```bash
npm install
```

## Локальный запуск

```bash
npm run dev
```

Откройте адрес из терминала (обычно `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Lint

```bash
npm run lint
```

## Изменение контактов

Все контактные данные находятся в:

```text
src/data/site.ts
```

Обновите телефон, email, Instagram, Telegram, адрес и URL сайта.

После смены production URL также обновите:

- `index.html` (canonical, Open Graph, JSON-LD)
- `public/robots.txt`
- `public/sitemap.xml`

## Замена изображений портфолио

Mockup-изображения лежат в:

```text
public/images/projects/
```

Список проектов и пути к картинкам — в:

```text
src/data/projects.ts
```

Рекомендуемый формат: WebP/SVG/PNG, ширина около 1200px, соотношение ~16:10.

## Изменение текстов

Тексты вынесены в data-файлы:

- `src/data/benefits.ts` — преимущества и показатели
- `src/data/solutions.ts` — решения, процесс, оффер
- `src/data/faq.ts` — FAQ
- `src/data/projects.ts` — портфолио
- `src/data/form.ts` — опции формы
- `src/data/i18n.ts` — заготовка под мультиязычность (ru / uz / en)

## Форма Netlify Forms

Форма заявки использует Netlify Forms:

- React-форма: `src/components/ContactForm.tsx`
- Статический skeleton для детекта Netlify: `public/form.html`
- Honeypot-поле: `bot-field`
- Состояния: loading / success / error

После деплоя на Netlify заявки появятся в разделе Forms.

## Структура проекта

```text
src/
  components/   # UI-компоненты
  sections/     # Секции лендинга
  pages/        # Страницы (Home, 404)
  hooks/        # Хуки
  data/         # Контент и конфиг
  types/        # Типы
  utils/        # Утилиты
  assets/       # Локальные ассеты
public/         # Статика, SEO, form skeleton
```

## Деплой

### Netlify

В репозитории уже есть `netlify.toml`:

```toml
[build]
command = "npm run build"
publish = "dist"
```

SPA-редиректы настроены на `index.html`.

### GitHub

Репозиторий: `fenix-nfc-website`

## Замечания по i18n

Сейчас основной язык — русский. Архитектура подготовлена к добавлению узбекского и английского через `src/data/i18n.ts` и отдельные словари в `src/data`.
