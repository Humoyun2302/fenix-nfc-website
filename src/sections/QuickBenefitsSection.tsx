import { Fingerprint, Palette, Wallet, LayoutDashboard } from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '@/components/Reveal'
import { quickBenefits, stats } from '@/data/benefits'

const icons = {
  tap: Fingerprint,
  brand: Palette,
  'no-fee': Wallet,
  admin: LayoutDashboard,
} as const

export function QuickBenefitsSection() {
  return (
    <section className="section-pad relative py-16 sm:py-20" aria-labelledby="quick-benefits-title">
      <div className="container-shell">
        <Reveal>
          <div className="mb-10 grid grid-cols-2 gap-4 border-y border-white/8 py-6 sm:grid-cols-4 sm:gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <h2 id="quick-benefits-title" className="sr-only">
          Короткие преимущества
        </h2>

        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickBenefits.map((item) => {
            const Icon = icons[item.id as keyof typeof icons]
            return (
              <StaggerItem key={item.id}>
                <div className="h-full rounded-3xl border border-white/8 bg-white/[0.02] p-5 transition duration-300 hover:border-flame/30 hover:bg-white/[0.035]">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-flame">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-display text-lg font-medium text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
