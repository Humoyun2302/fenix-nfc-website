import { Reveal } from '@/components/Reveal'
import { InteractiveDemo } from '@/components/InteractiveDemo'
import { SectionHeading } from '@/components/SectionHeading'

export function DemoSection() {
  return (
    <section id="demo" className="section-pad py-24 sm:py-32">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            title="Демонстрация"
            description="Касание — и нужная страница уже на экране."
            className="mb-14"
          />
        </Reveal>
        <Reveal delay={0.06}>
          <InteractiveDemo />
        </Reveal>
      </div>
    </section>
  )
}
