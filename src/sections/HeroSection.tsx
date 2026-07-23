import { motion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'
import { Button } from '@/components/Button'
import { HeroProduct } from '@/components/HeroProduct'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function HeroSection() {
  const reduced = useReducedMotion()

  return (
    <section id="hero" className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 surface-glow" aria-hidden />
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-40" aria-hidden />

      <div className="section-pad relative">
        <div className="container-shell grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div className="min-w-0">
            <motion.p
              className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-flame-soft"
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              FENIX NFC
            </motion.p>
            <motion.h1
              className="font-display text-[2.15rem] font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]"
              initial={reduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
            >
              Один контакт.{' '}
              <span className="gradient-text">Больше возможностей</span> для вашего бизнеса.
            </motion.h1>
            <motion.p
              className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
            >
              NFC-таблички, электронные меню и цифровые визитки, которые открываются одним касанием.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
            >
              <Button href="#contact" as="a" size="lg" magnetic>
                Заказать решение
              </Button>
              <Button href="#demo" as="a" size="lg" variant="secondary">
                Посмотреть, как работает
                <ArrowDownRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          <HeroProduct />
        </div>
      </div>
    </section>
  )
}
