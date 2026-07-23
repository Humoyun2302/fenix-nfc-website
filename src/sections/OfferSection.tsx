import { Button } from '@/components/Button'
import { Reveal } from '@/components/Reveal'
import { offerIncludes } from '@/data/solutions'
import { siteConfig } from '@/data/site'

export function OfferSection() {
  return (
    <section id="offer" className="section-pad py-24 sm:py-32">
      <div className="container-shell">
        <Reveal>
          <div className="grid gap-12 border-y border-white/8 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16 lg:py-16">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-flame-soft">
                Цена
              </p>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
                {siteConfig.offer.title}
              </h2>
              <p className="mt-4 font-display text-4xl font-semibold gradient-text sm:text-5xl">
                {siteConfig.offer.price}
              </p>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted sm:text-base">
                Готовый пакет: носители, меню, дизайн и админ-панель. Срок —{' '}
                {siteConfig.offer.leadTime}.
              </p>
              <div className="mt-8">
                <Button href="#contact" as="a" size="lg" magnetic>
                  Получить расчёт
                </Button>
              </div>
            </div>

            <ul className="space-y-3">
              {offerIncludes.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-soft">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-flame" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
