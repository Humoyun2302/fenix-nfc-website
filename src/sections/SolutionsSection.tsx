import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { SolutionVisual } from '@/components/SolutionVisual'
import { solutions } from '@/data/solutions'
import { cn } from '@/utils'

export function SolutionsSection() {
  const [active, setActive] = useState(0)
  const current = solutions[active]

  return (
    <section id="solutions" className="section-pad py-24 sm:py-32">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            title="Основные решения"
            description="Три формата — под меню, сервис и личный бренд."
            className="mb-14"
          />
        </Reveal>

        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="flex flex-col gap-1" role="tablist" aria-label="Решения FENIX">
              {solutions.map((solution, index) => {
                const isActive = index === active
                return (
                  <button
                    key={solution.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(index)}
                    onMouseEnter={() => setActive(index)}
                    className={cn(
                      'rounded-2xl px-4 py-4 text-left transition duration-300 sm:px-5',
                      isActive ? 'bg-white/[0.04]' : 'hover:bg-white/[0.02]',
                    )}
                  >
                    <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
                      {solution.subtitle}
                    </p>
                    <h3
                      className={cn(
                        'mt-1 font-display text-xl font-medium transition sm:text-2xl',
                        isActive ? 'text-white' : 'text-soft',
                      )}
                    >
                      {solution.title}
                    </h3>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                            {solution.description}
                          </p>
                          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                            {solution.features.map((feature) => (
                              <li key={feature} className="text-sm text-soft">
                                <span className="mr-2 inline-block h-1 w-1 rounded-full bg-flame align-middle" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                )
              })}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <SolutionVisual kind={current.visual} />
              </motion.div>
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
