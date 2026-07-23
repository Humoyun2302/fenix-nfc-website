import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '@/components/Button'
import { NfcWaves } from '@/components/NfcWaves'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function InteractiveDemo() {
  const [active, setActive] = useState(false)
  const reduced = useReducedMotion()

  const trigger = () => {
    setActive(true)
    window.setTimeout(() => setActive(false), reduced ? 1200 : 4200)
  }

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-panel to-ink-soft p-5 sm:p-8">
      <div className="absolute -left-20 top-0 h-56 w-56 rounded-full bg-flame/10 blur-3xl" aria-hidden />
      <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-flame-soft">
            Интерактив
          </p>
          <h3 className="font-display text-2xl font-semibold sm:text-3xl">
            Попробуйте, как работает касание
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-base">
            Нажмите кнопку — смартфон приблизится к табличке, появятся NFC-волны и откроется
            электронное меню.
          </p>
          <div className="mt-6">
            <Button onClick={trigger} size="lg" magnetic disabled={active}>
              Коснуться NFC
            </Button>
          </div>
          <AnimatePresence>
            {active && (
              <motion.p
                className="mt-4 text-sm font-medium text-flame-soft"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                Мгновенно. Без приложения.
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className="relative mx-auto h-[320px] w-full max-w-md sm:h-[360px]">
          <motion.div
            className="absolute left-1/2 top-[18%] z-10 w-[55%] -translate-x-1/2"
            animate={
              active
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 24, scale: 0.92 }
            }
            transition={{ duration: reduced ? 0.2 : 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="overflow-hidden rounded-[1.4rem] border border-white/15 bg-ink shadow-2xl">
              <div className="border-b border-white/8 px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-muted">
                FENIX Menu
              </div>
              <div className="space-y-2 p-3">
                {['Брускетта', 'Ризотто', 'Тирамису'].map((dish, i) => (
                  <div key={dish} className="rounded-xl bg-white/[0.04] px-3 py-2">
                    <div className="flex justify-between text-xs text-white">
                      <span>{dish}</span>
                      <span className="text-flame-soft">{(i + 3) * 4}$</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-[10%] left-1/2 z-0 w-[70%] -translate-x-1/2"
            animate={active && !reduced ? { scale: [1, 1.02, 1] } : { scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <div className="rounded-[1.35rem] border border-white/12 bg-gradient-to-br from-[#1f1f24] to-[#101014] p-5 text-center">
              <p className="font-display text-xs tracking-[0.2em]">FENI<span className="text-flame">X</span></p>
              <div className="my-5 flex justify-center">
                <NfcWaves active={active} size={110} />
              </div>
              <p className="text-xs text-muted">NFC Table Plaque</p>
            </div>
          </motion.div>

          <motion.div
            className="absolute right-[8%] top-[38%] z-20"
            animate={
              active
                ? { x: -36, y: 28, rotate: -18 }
                : { x: 0, y: 0, rotate: -8 }
            }
            transition={{ duration: reduced ? 0.2 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="h-32 w-16 rounded-[1.2rem] border border-white/20 bg-gradient-to-b from-[#2c2c32] to-[#121216] p-1 shadow-xl">
              <div className="h-full rounded-[1rem] bg-ink-soft p-1.5">
                <div className="mx-auto mb-2 h-1 w-7 rounded-full bg-white/20" />
                <div className="h-[70%] rounded-lg bg-gradient-to-b from-flame/25 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
