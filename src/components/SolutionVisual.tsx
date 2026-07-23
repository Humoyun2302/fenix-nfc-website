import { motion } from 'framer-motion'
import { NfcWaves } from '@/components/NfcWaves'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/utils'

type VisualKind = 'menu' | 'plaque' | 'card'

export function SolutionVisual({ kind, className }: { kind: VisualKind; className?: string }) {
  const reduced = useReducedMotion()

  if (kind === 'menu') {
    return (
      <div className={cn('relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-graphite p-5', className)}>
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-flame/15 blur-3xl" />
        <div className="relative grid gap-4 sm:grid-cols-[1fr_0.85fr]">
          <div className="rounded-2xl border border-white/8 bg-ink-soft p-4">
            <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-muted">Categories</p>
            <div className="space-y-2">
              {['Салаты', 'Паста', 'Стейки', 'Напитки'].map((item, i) => (
                <div key={item} className="flex items-center justify-between rounded-xl bg-white/[0.03] px-3 py-2.5">
                  <span className="text-sm text-white">{item}</span>
                  <span className="text-xs text-flame-soft">{12 + i * 7}$</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-2xl border border-white/8 bg-gradient-to-b from-white/[0.04] to-transparent p-4">
            <div>
              <p className="font-display text-lg text-white">Dinner Menu</p>
              <p className="mt-1 text-xs text-muted">RU · UZ · EN</p>
            </div>
            <div className="mt-6 flex justify-center">
              <NfcWaves size={110} />
            </div>
            <p className="mt-4 text-center text-xs text-muted">NFC + QR доступ</p>
          </div>
        </div>
      </div>
    )
  }

  if (kind === 'plaque') {
    return (
      <div className={cn('relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-graphite p-6', className)}>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-flame/50 to-transparent" />
        <div className="mx-auto max-w-xs">
          <motion.div
            className="rounded-[1.4rem] border border-white/12 bg-gradient-to-br from-[#222228] to-[#121216] p-6 text-center shadow-2xl"
            whileHover={reduced ? undefined : { y: -6 }}
          >
            <p className="font-display text-sm tracking-[0.2em]">FENI<span className="text-flame">X</span></p>
            <div className="my-6 flex justify-center">
              <NfcWaves size={100} />
            </div>
            <p className="text-sm text-white">Оставить отзыв</p>
            <p className="mt-1 text-xs text-muted">или открыть меню</p>
          </motion.div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[10px] text-muted">
            <span className="rounded-full border border-white/8 px-2 py-1">Wi‑Fi</span>
            <span className="rounded-full border border-white/8 px-2 py-1">Оплата</span>
            <span className="rounded-full border border-white/8 px-2 py-1">Вызов</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn('relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-graphite p-6', className)}>
      <div className="mx-auto flex max-w-sm items-center justify-center gap-4">
        <motion.div
          className="h-48 w-28 rounded-2xl border border-white/15 bg-gradient-to-br from-[#2a2a30] via-[#1a1a1e] to-[#0d0d10] p-3 shadow-2xl"
          whileHover={reduced ? undefined : { rotate: -4, y: -4 }}
        >
          <div className="flex h-full flex-col justify-between">
            <p className="font-display text-[10px] tracking-[0.16em]">FENI<span className="text-flame">X</span></p>
            <div className="flex justify-center">
              <NfcWaves size={72} />
            </div>
            <p className="text-[9px] uppercase tracking-[0.18em] text-muted">Card</p>
          </div>
        </motion.div>
        <div className="flex-1 space-y-2 rounded-2xl border border-white/8 bg-ink-soft p-3">
          {['Контакты', 'Instagram', 'Telegram', 'Сайт'].map((item) => (
            <div key={item} className="rounded-lg bg-white/[0.03] px-3 py-2 text-xs text-soft">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
