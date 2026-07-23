import { Check } from 'lucide-react'
import { Button } from '@/components/Button'
import { Reveal } from '@/components/Reveal'
import { offerIncludes } from '@/data/solutions'
import { siteConfig } from '@/data/site'

export function OfferSection() {
  return (
    <section id="offer" className="section-pad py-16 sm:py-24">
      <div className="container-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#1a120e] via-ink-soft to-ink p-6 sm:p-10 lg:p-12">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-flame/20 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full bg-flame/10 blur-3xl"
              aria-hidden
            />

            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-flame-soft">
                  Основное предложение
                </p>
                <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
                  {siteConfig.offer.title} —{' '}
                  <span className="gradient-text">{siteConfig.offer.price}</span>
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                  Готовый пакет для запуска цифрового меню в зале: носители, страница, дизайн и
                  админ-панель. Без ежемесячной подписки.
                </p>
                <p className="mt-5 text-sm text-soft">
                  Срок изготовления — <span className="text-white">{siteConfig.offer.leadTime}</span>.
                </p>
                <div className="mt-8">
                  <Button href="#contact" as="a" size="lg" magnetic>
                    Получить расчёт
                  </Button>
                </div>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {offerIncludes.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-soft"
                  >
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-flame/15 text-flame">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
