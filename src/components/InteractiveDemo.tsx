import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '@/components/Button'
import { NfcWaves } from '@/components/NfcWaves'
import { useReducedMotion } from '@/hooks/useReducedMotion'

type Phase = 'idle' | 'approach' | 'touch' | 'menu' | 'admin'

const DISHES = [
  { name: 'Брускетта', price: '12$' },
  { name: 'Ризотто', price: '18$' },
  { name: 'Тирамису', price: '14$' },
] as const

export function InteractiveDemo() {
  const [phase, setPhase] = useState<Phase>('idle')
  const [busy, setBusy] = useState(false)
  const reduced = useReducedMotion()
  const timers = useRef<number[]>([])

  useEffect(() => {
    return () => timers.current.forEach((id) => window.clearTimeout(id))
  }, [])

  const trigger = () => {
    if (busy) return
    timers.current.forEach((id) => window.clearTimeout(id))
    timers.current = []
    setBusy(true)
    setPhase('approach')

    const queue: Array<[Phase, number]> = reduced
      ? [
          ['touch', 200],
          ['menu', 400],
          ['admin', 700],
          ['idle', 1600],
        ]
      : [
          ['touch', 700],
          ['menu', 900],
          ['admin', 1400],
          ['idle', 2800],
        ]

    let delay = 0
    for (const [next, wait] of queue) {
      delay += wait
      const id = window.setTimeout(() => {
        setPhase(next)
        if (next === 'idle') setBusy(false)
      }, delay)
      timers.current.push(id)
    }
  }

  const active = phase !== 'idle'
  const showMenu = phase === 'menu' || phase === 'admin'
  const showAdmin = phase === 'admin'

  return (
    <div className="relative overflow-hidden">
      <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div className="min-w-0">
          <h3 className="font-display text-2xl font-semibold sm:text-3xl">
            Попробуйте касание
          </h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted sm:text-base">
            Смартфон приближается к табличке — и меню открывается мгновенно.
          </p>
          <div className="mt-7">
            <Button onClick={trigger} size="lg" magnetic disabled={busy}>
              Коснуться NFC
            </Button>
          </div>
        </div>

        <div className="relative mx-auto h-[300px] w-full max-w-md overflow-hidden sm:h-[340px]">
          <motion.div
            className="absolute bottom-[8%] left-1/2 z-0 w-[68%] max-w-[16rem] -translate-x-1/2"
            animate={{
              scale: active && !reduced ? [1, 1.015, 1] : 1,
              boxShadow: active
                ? '0 0 40px rgba(255,106,43,0.22)'
                : '0 0 0 rgba(255,106,43,0)',
            }}
            transition={{ duration: 1.1 }}
          >
            <div className="rounded-[1.35rem] border border-white/12 bg-gradient-to-br from-[#1f1f24] to-[#101014] px-5 py-6 text-center">
              <p className="font-display text-xs tracking-[0.2em]">
                FENI<span className="text-flame">X</span>
              </p>
              <div className="my-5 flex justify-center">
                <NfcWaves active={active && !reduced} size={100} />
              </div>
              <p className="text-xs text-muted">NFC Table</p>
            </div>
          </motion.div>

          <motion.div
            className="absolute right-[6%] top-[18%] z-20 w-[34%] max-w-[6.5rem]"
            animate={
              phase === 'idle'
                ? { x: 0, y: 0, rotate: -10 }
                : phase === 'approach'
                  ? { x: -18, y: 18, rotate: -14 }
                  : { x: -34, y: 36, rotate: -18 }
            }
            transition={{ duration: reduced ? 0.15 : 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-[1.2rem] border border-white/20 bg-gradient-to-b from-[#2c2c32] to-[#121216] p-1 shadow-xl">
              <div className="overflow-hidden rounded-[0.95rem] bg-ink-soft p-1.5">
                <div className="mx-auto mb-2 h-1 w-7 rounded-full bg-white/20" />
                <AnimatePresence mode="wait">
                  {!showMenu ? (
                    <motion.div
                      key="blank"
                      className="h-20 rounded-lg bg-gradient-to-b from-white/[0.06] to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  ) : (
                    <motion.div
                      key="screen"
                      className="space-y-1"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      {DISHES.map((dish, i) => (
                        <motion.div
                          key={dish.name}
                          className="rounded-md bg-white/[0.05] px-1.5 py-1"
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.08 }}
                        >
                          <div className="flex justify-between gap-1 text-[7px] text-white">
                            <span className="truncate">{dish.name}</span>
                            <span className="text-flame-soft">{dish.price}</span>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          <AnimatePresence>
            {showMenu && (
              <motion.div
                className="absolute left-[4%] top-[6%] z-10 w-[52%] max-w-[12rem] overflow-hidden rounded-[1.25rem] border border-white/12 bg-ink shadow-2xl"
                initial={{ opacity: 0, y: 18, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.96 }}
                transition={{ duration: reduced ? 0.15 : 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="border-b border-white/8 px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-muted">
                  {showAdmin ? 'Admin' : 'FENIX Menu'}
                </div>
                <div className="space-y-2 p-3">
                  <AnimatePresence mode="wait">
                    {!showAdmin ? (
                      <motion.div
                        key="guest"
                        className="space-y-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {DISHES.map((dish) => (
                          <div key={dish.name} className="rounded-xl bg-white/[0.04] px-3 py-2">
                            <div className="flex justify-between text-xs text-white">
                              <span>{dish.name}</span>
                              <span className="text-flame-soft">{dish.price}</span>
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="admin"
                        className="space-y-2"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                      >
                        {['Цены', 'Категории', 'Языки'].map((item, i) => (
                          <div
                            key={item}
                            className="flex items-center justify-between rounded-xl bg-white/[0.04] px-3 py-2"
                          >
                            <span className="text-xs text-white">{item}</span>
                            <span
                              className="h-1.5 rounded-full bg-gradient-to-r from-flame/80 to-flame-soft/40"
                              style={{ width: `${40 + i * 16}%` }}
                            />
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
