import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { SolutionVisual } from '@/components/SolutionVisual'
import { solutions } from '@/data/solutions'

export function SolutionsSection() {
  return (
    <section id="solutions" className="section-pad py-16 sm:py-24">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Решения"
            title="Продукты FENIX NFC под задачи бизнеса"
            description="Каждое решение — это физический носитель и цифровая страница, которые работают вместе."
            className="mb-12"
          />
        </Reveal>

        <div className="space-y-14 lg:space-y-20">
          {solutions.map((solution, index) => (
            <Reveal key={solution.id} delay={0.05}>
              <div
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                  index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className="min-w-0">
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-flame-soft">
                    {solution.subtitle}
                  </p>
                  <h3 className="font-display text-2xl font-semibold sm:text-3xl">{solution.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    {solution.description}
                  </p>
                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {solution.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-soft"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-flame" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <SolutionVisual kind={solution.visual} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
