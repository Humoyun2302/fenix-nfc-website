import { motion } from 'framer-motion'
import { NfcWaves } from '@/components/NfcWaves'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/utils'

type VisualKind = 'menu' | 'plaque' | 'card'

export function SolutionVisual({ kind, className }: { kind: VisualKind; className?: string }) {
  const reduced = useReducedMotion()

  if (kind === 'menu') {
    return (
      <div className={cn('relative overflow-hidden rounded-[1.75rem] bg-graphite/80 p-6 sm:p-8', className)}>
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-flame/12 blur-3xl" />
        <div className="relative max-w-sm space-y-3">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted">Dinner Menu</p>
          {['Салаты', 'Паста', 'Стейки', 'Напитки'].map((item, i) => (
            <motion.div
              key={item}
              className="flex items-center justify-between border-b border-white/6 py-3"
              initial={reduced ? false : { opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06 }}
            >
              <span className="text-sm text-white">{item}</span>
              <span className="text-xs text-flame-soft">{12 + i * 7}$</span>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  if (kind === 'plaque') {
    return (
      <div className={cn('relative overflow-hidden rounded-[1.75rem] bg-graphite/80 p-8 sm:p-10', className)}>
        <motion.div
          className="mx-auto max-w-[15rem] rounded-[1.4rem] border border-white/10 bg-gradient-to-br from-[#222228] to-[#121216] p-7 text-center shadow-2xl"
          whileHover={reduced ? undefined : { y: -5 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <p className="font-display text-sm tracking-[0.2em]">
            FENI<span className="text-flame">X</span>
          </p>
          <div className="my-7 flex justify-center">
            <NfcWaves size={96} />
          </div>
          <p className="text-sm text-white">Коснитесь</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className={cn('relative overflow-hidden rounded-[1.75rem] bg-graphite/80 p-8 sm:p-10', className)}>
      <div className="mx-auto flex max-w-sm items-center justify-center gap-6">
        <motion.div
          className="h-52 w-32 rounded-2xl border border-white/12 bg-gradient-to-br from-[#2a2a30] via-[#1a1a1e] to-[#0d0d10] p-4 shadow-2xl"
          whileHover={reduced ? undefined : { rotate: -3, y: -4 }}
          transition={{ type: 'spring', stiffness: 200, damping: 18 }}
        >
          <div className="flex h-full flex-col justify-between">
            <p className="font-display text-[10px] tracking-[0.16em]">
              FENI<span className="text-flame">X</span>
            </p>
            <div className="flex justify-center">
              <NfcWaves size={68} />
            </div>
            <p className="text-[9px] uppercase tracking-[0.18em] text-muted">Card</p>
          </div>
        </motion.div>
        <div className="flex-1 space-y-3">
          {['Контакты', 'Instagram', 'Telegram'].map((item, i) => (
            <motion.div
              key={item}
              className="text-sm text-soft"
              initial={reduced ? false : { opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08 + i * 0.07 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
