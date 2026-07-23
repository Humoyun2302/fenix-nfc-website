import {
  Smile,
  Sparkles,
  RefreshCw,
  Printer,
  MessageSquareHeart,
  ChartNoAxesCombined,
  Paintbrush,
  Ban,
} from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { businessBenefits } from '@/data/benefits'

const icons = [
  Smile,
  Sparkles,
  RefreshCw,
  Printer,
  MessageSquareHeart,
  ChartNoAxesCombined,
  Paintbrush,
  Ban,
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="section-pad py-16 sm:py-24">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Преимущества"
            title="Что получает бизнес"
            description="Не просто красивый носитель — рабочий инструмент для сервиса, коммуникации и имиджа."
            className="mb-12"
          />
        </Reveal>

        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {businessBenefits.map((item, index) => {
            const Icon = icons[index] ?? Sparkles
            return (
              <StaggerItem key={item.id}>
                <article className="group h-full rounded-3xl border border-white/8 bg-gradient-to-b from-white/[0.03] to-transparent p-5 transition duration-300 hover:-translate-y-1 hover:border-flame/25">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-flame transition group-hover:border-flame/40">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-display text-lg font-medium">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </article>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
