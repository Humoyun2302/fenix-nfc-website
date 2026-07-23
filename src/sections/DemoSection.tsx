import { Reveal } from '@/components/Reveal'
import { InteractiveDemo } from '@/components/InteractiveDemo'
import { SectionHeading } from '@/components/SectionHeading'

export function DemoSection() {
  return (
    <section id="demo" className="section-pad py-16 sm:py-24">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Демонстрация"
            title="Один жест — и страница уже открыта"
            description="Так выглядит путь гостя: касание, NFC-сигнал и мгновенный переход к нужному контенту."
            className="mb-10"
          />
        </Reveal>
        <Reveal delay={0.08}>
          <InteractiveDemo />
        </Reveal>
      </div>
    </section>
  )
}
