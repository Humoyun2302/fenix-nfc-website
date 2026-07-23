import { useCallback, useEffect, useRef, useState, type PointerEvent } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import { NfcWaves } from '@/components/NfcWaves'
import { useIsDesktop } from '@/hooks/useIsDesktop'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/utils'

type Phase = 'idle' | 'approach' | 'touch' | 'menu' | 'items' | 'hold'

const MENU_ITEMS = [
  { name: 'Брускетта', price: '12$' },
  { name: 'Ризотто', price: '18$' },
  { name: 'Тирамису', price: '14$' },
] as const

type HeroProductProps = {
  className?: string
}

export function HeroProduct({ className }: HeroProductProps) {
  const reduced = useReducedMotion()
  const isDesktop = useIsDesktop()
  const [phase, setPhase] = useState<Phase>(reduced ? 'items' : 'idle')
  const timers = useRef<number[]>([])
  const pauseAuto = useRef(false)
  const loopId = useRef(0)

  const clearTimers = useCallback(() => {
    timers.current.forEach((id) => window.clearTimeout(id))
    timers.current = []
  }, [])

  const runCycle = useCallback(() => {
    if (reduced) return
    const id = ++loopId.current
    clearTimers()
    setPhase('approach')

    const steps: Array<[Phase | 'reset', number]> = [
      ['touch', 1400],
      ['menu', 900],
      ['items', 700],
      ['hold', 900],
      ['idle', 2200],
      ['reset', 850],
    ]

    let delay = 0
    for (const [next, wait] of steps) {
      delay += wait
      const timer = window.setTimeout(() => {
        if (loopId.current !== id) return
        if (next === 'reset') {
          if (!pauseAuto.current) runCycle()
          return
        }
        setPhase(next)
      }, delay)
      timers.current.push(timer)
    }
  }, [clearTimers, reduced])

  useEffect(() => {
    if (reduced) {
      setPhase('items')
      return
    }
    const start = window.setTimeout(() => runCycle(), 500)
    return () => {
      window.clearTimeout(start)
      loopId.current += 1
      clearTimers()
    }
  }, [clearTimers, reduced, runCycle])

  const triggerTap = () => {
    if (reduced) return
    pauseAuto.current = false
    loopId.current += 1
    clearTimers()
    setPhase('idle')
    window.setTimeout(() => runCycle(), 80)
  }

  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const springX = useSpring(px, { stiffness: 90, damping: 18, mass: 0.4 })
  const springY = useSpring(py, { stiffness: 90, damping: 18, mass: 0.4 })
  const parallaxEnabled = isDesktop && !reduced

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!parallaxEnabled) return
    const rect = event.currentTarget.getBoundingClientRect()
    const nx = (event.clientX - rect.left) / rect.width - 0.5
    const ny = (event.clientY - rect.top) / rect.height - 0.5
    px.set(nx * 16)
    py.set(ny * 10)
  }

  const onPointerLeave = () => {
    px.set(0)
    py.set(0)
  }

  const phoneX = useTransform(springX, (v) => v * 1.05)
  const phoneY = useTransform(springY, (v) => v * 0.85)
  const plaqueX = useTransform(springX, (v) => v * -0.4)
  const plaqueY = useTransform(springY, (v) => v * -0.3)

  const touching = phase === 'touch' || phase === 'menu' || phase === 'items' || phase === 'hold'
  const showMenu = phase === 'menu' || phase === 'items' || phase === 'hold'
  const showItems = phase === 'items' || phase === 'hold'
  const glowStrength = touching ? (phase === 'touch' ? 0.55 : 0.28) : 0.12

  const phoneMotion = reduced
    ? { x: 0, y: 0, rotate: -12 }
    : phase === 'idle'
      ? { x: 38, y: -32, rotate: -18 }
      : phase === 'approach'
        ? { x: 6, y: 10, rotate: -10 }
        : { x: -4, y: 26, rotate: -6 }

  return (
    <div
      className={cn(
        'relative mx-auto w-full max-w-[22rem] overflow-hidden sm:max-w-md',
        className,
      )}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <motion.div
        className="pointer-events-none absolute inset-[-8%] -z-10 rounded-full bg-flame blur-3xl"
        animate={{ opacity: glowStrength }}
        transition={{ duration: 0.7 }}
        aria-hidden
      />

      <button
        type="button"
        onClick={triggerTap}
        className="group relative aspect-[5/6] w-full cursor-pointer overflow-hidden rounded-[2rem] border-0 bg-transparent p-0 text-left focus-visible:outline-none"
        aria-label="Запустить демонстрацию NFC-касания"
      >
        <span className="sr-only">Коснитесь, чтобы повторить анимацию NFC</span>

        <motion.div
          className="absolute bottom-[6%] left-1/2 z-10 w-[78%] max-w-[17rem] -translate-x-1/2"
          style={parallaxEnabled ? { x: plaqueX, y: plaqueY } : undefined}
        >
          <motion.div
            className="relative rounded-[1.35rem] border border-white/12 bg-gradient-to-br from-[#1e1e24] to-[#0f0f12] px-5 pb-5 pt-6 shadow-[0_28px_70px_rgba(0,0,0,0.55)]"
            animate={{
              boxShadow: touching
                ? '0 28px 70px rgba(0,0,0,0.55), 0 0 42px rgba(255,106,43,0.28)'
                : '0 28px 70px rgba(0,0,0,0.55)',
            }}
            transition={{ duration: 0.7 }}
            whileHover={reduced || !isDesktop ? undefined : { y: -4 }}
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="font-display text-sm tracking-[0.2em] text-white">
                FENI<span className="text-flame">X</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted">Table 07</span>
            </div>

            <div className="relative mx-auto flex h-[6.5rem] items-center justify-center">
              <motion.div
                className="absolute inset-0 rounded-full bg-flame/30 blur-2xl"
                animate={{
                  opacity: touching ? 0.65 : 0.15,
                  scale: touching ? 1.1 : 0.9,
                }}
                transition={{ duration: 0.8 }}
              />
              <NfcWaves active={touching && !reduced} size={118} />
            </div>

            <p className="mt-3 text-center text-[11px] text-muted transition group-hover:text-soft">
              {touching ? 'Меню открыто' : 'Коснитесь телефоном'}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute right-[4%] top-[4%] z-30 w-[42%] max-w-[9.5rem] sm:right-[6%] sm:top-[2%] sm:w-[40%]"
          style={parallaxEnabled ? { x: phoneX, y: phoneY } : undefined}
          animate={phoneMotion}
          transition={{
            duration: reduced ? 0.01 : phase === 'approach' ? 1.25 : 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="rounded-[1.55rem] border border-white/22 bg-gradient-to-b from-[#2c2c33] to-[#121216] p-[0.35rem] shadow-[0_24px_60px_rgba(0,0,0,0.65)]">
            <div className="relative overflow-hidden rounded-[1.25rem] bg-ink-soft">
              <div className="absolute inset-x-0 top-0 z-10 flex justify-center pt-2">
                <span className="h-1.5 w-10 rounded-full bg-white/15" />
              </div>

              <div className="aspect-[9/16] w-full overflow-hidden pt-5">
                <AnimatePresence mode="wait">
                  {!showMenu ? (
                    <motion.div
                      key="lock"
                      className="flex h-full flex-col items-center justify-center gap-3 px-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="h-10 w-10 rounded-2xl border border-white/10 bg-white/[0.04]" />
                      <div className="h-1.5 w-16 rounded-full bg-white/10" />
                      <div className="h-1.5 w-10 rounded-full bg-white/8" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      className="flex h-full flex-col px-2.5 pb-3 pt-1"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="mb-2 flex items-center justify-between px-1">
                        <span className="text-[8px] uppercase tracking-[0.16em] text-muted">
                          Menu
                        </span>
                        <span className="h-1.5 w-1.5 rounded-full bg-flame shadow-[0_0_10px_rgba(255,106,43,0.8)]" />
                      </div>

                      <div className="space-y-1.5">
                        {MENU_ITEMS.map((item, index) => (
                          <motion.div
                            key={item.name}
                            className="rounded-xl bg-white/[0.05] px-2 py-1.5"
                            initial={reduced ? false : { opacity: 0, y: 8 }}
                            animate={
                              showItems
                                ? { opacity: 1, y: 0 }
                                : { opacity: index === 0 ? 0.4 : 0, y: index === 0 ? 0 : 8 }
                            }
                            transition={{
                              duration: 0.35,
                              delay: showItems ? index * 0.1 : 0,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                          >
                            <div className="flex items-center justify-between gap-1">
                              <span className="truncate text-[9px] text-white">{item.name}</span>
                              <span className="shrink-0 text-[8px] text-flame-soft">
                                {item.price}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <motion.div
                        className="mt-auto rounded-xl border border-white/8 bg-gradient-to-br from-flame/20 to-transparent p-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: showItems ? 1 : 0 }}
                        transition={{ delay: 0.28, duration: 0.35 }}
                      >
                        <div className="h-1 w-10 rounded-full bg-white/20" />
                        <div className="mt-1.5 h-1 w-16 rounded-full bg-white/10" />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </button>
    </div>
  )
}
