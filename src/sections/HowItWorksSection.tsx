import { Reveal, Stagger, StaggerItem } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { processSteps } from '@/data/solutions'

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-pad py-24 sm:py-32">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            title="Как это работает"
            description="Четыре шага от идеи до запуска."
            className="mb-14"
          />
        </Reveal>

        <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {processSteps.map((step) => (
            <StaggerItem key={step.step}>
              <div className="relative">
                <span className="font-display text-sm tracking-[0.2em] text-flame-soft">
                  {step.step}
                </span>
                <h3 className="mt-3 font-display text-xl font-medium">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
