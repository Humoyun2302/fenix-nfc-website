import { Reveal, Stagger, StaggerItem } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { processSteps } from '@/data/solutions'

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-pad py-16 sm:py-24">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Процесс"
            title="Как это работает"
            description="Четыре понятных шага от идеи до запуска в вашем заведении."
            className="mb-12"
          />
        </Reveal>

        <div className="relative">
          <div
            className="absolute left-[19px] top-3 hidden h-[calc(100%-24px)] w-px bg-gradient-to-b from-flame/70 via-white/15 to-transparent md:left-1/2 md:block"
            aria-hidden
          />

          <Stagger className="grid gap-6 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <StaggerItem key={step.step}>
                <div
                  className={`relative rounded-3xl border border-white/8 bg-white/[0.02] p-6 ${
                    index % 2 === 1 ? 'md:mt-10' : ''
                  }`}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-flame/40 bg-flame/10 font-display text-sm text-flame">
                      {step.step}
                    </span>
                    <h3 className="font-display text-lg font-medium sm:text-xl">{step.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted sm:text-base">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
