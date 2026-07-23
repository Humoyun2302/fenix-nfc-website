import { motion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'
import { Button } from '@/components/Button'
import { HeroProduct } from '@/components/HeroProduct'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function HeroSection() {
  const reduced = useReducedMotion()

  return (
    <section id="hero" className="relative overflow-x-hidden pt-24 sm:pt-28 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 surface-glow" aria-hidden />

      <div className="section-pad relative">
        <div className="container-shell grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="order-1 min-w-0">
            <motion.p
              className="mb-5 font-display text-sm font-semibold tracking-[0.28em] text-flame-soft sm:text-base"
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              FENIX NFC
            </motion.p>
            <motion.h1
              className="font-display text-[2.35rem] font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[3.5rem]"
              initial={reduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
            >
              Один контакт.{' '}
              <span className="gradient-text">Меню уже открыто.</span>
            </motion.h1>
            <motion.p
              className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
            >
              NFC-таблички и электронные меню, которые работают одним касанием.
            </motion.p>
            <motion.div
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
            >
              <Button href="#contact" as="a" size="lg" magnetic>
                Заказать решение
              </Button>
              <Button href="#demo" as="a" size="lg" variant="secondary">
                Как это работает
                <ArrowDownRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          <div className="order-2 min-w-0 overflow-hidden">
            <HeroProduct />
          </div>
        </div>
      </div>
    </section>
  )
}
