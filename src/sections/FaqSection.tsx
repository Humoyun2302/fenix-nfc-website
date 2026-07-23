import { Accordion } from '@/components/Accordion'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { faqItems } from '@/data/faq'

export function FaqSection() {
  return (
    <section id="faq" className="section-pad py-16 sm:py-24">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Частые вопросы"
            description="Коротко о том, как работают NFC-решения FENIX и что входит в запуск."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <Accordion items={faqItems} />
        </Reveal>
      </div>
    </section>
  )
}
