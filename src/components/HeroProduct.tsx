import { motion } from 'framer-motion'
import { NfcWaves } from '@/components/NfcWaves'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/utils'

type HeroProductProps = {
  className?: string
}

export function HeroProduct({ className }: HeroProductProps) {
  const reduced = useReducedMotion()

  return (
    <div className={cn('relative mx-auto w-full max-w-md', className)}>
      <div className="absolute inset-0 -z-10 rounded-full bg-flame/20 blur-3xl" aria-hidden />
      <motion.div
        className="relative aspect-[4/5] w-full"
        initial={reduced ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        <motion.div
          className="absolute left-1/2 top-[12%] z-20 w-[58%] -translate-x-1/2"
          animate={reduced ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="overflow-hidden rounded-[1.6rem] border border-white/15 bg-graphite shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
            <div className="flex items-center justify-between border-b border-white/8 px-3 py-2">
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted">Menu</span>
              <span className="h-1.5 w-1.5 rounded-full bg-flame" />
            </div>
            <div className="space-y-2.5 p-3">
              {['Закуски', 'Основные блюда', 'Десерты'].map((item, index) => (
                <div key={item} className="rounded-xl bg-white/[0.04] px-3 py-2.5">
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-xs text-white">{item}</span>
                    <span className="text-[10px] text-flame-soft">от {(index + 2) * 4}$</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-flame/80 to-flame-soft/40"
                      style={{ width: `${55 + index * 12}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-[8%] left-1/2 z-10 w-[72%] -translate-x-1/2"
          whileHover={reduced ? undefined : { rotateX: -4, rotateY: 6, y: -6 }}
          transition={{ type: 'spring', stiffness: 180, damping: 18 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="relative rounded-[1.4rem] border border-white/12 bg-gradient-to-br from-[#1d1d22] to-[#101014] p-5 shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
            <div className="mb-8 flex items-center justify-between">
              <span className="font-display text-sm tracking-[0.18em] text-white">
                FENI<span className="text-flame">X</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted">Table 07</span>
            </div>
            <div className="mx-auto mb-6 flex justify-center">
              <NfcWaves size={120} />
            </div>
            <p className="text-center text-xs text-muted">Коснитесь телефоном</p>
            <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-flame/50 to-transparent" />
          </div>
        </motion.div>

        <motion.div
          className="absolute right-[4%] top-[42%] z-30"
          animate={reduced ? undefined : { y: [0, 10, 0], rotate: [-8, -4, -8] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="h-28 w-14 rounded-[1.1rem] border border-white/20 bg-gradient-to-b from-[#2a2a30] to-[#121216] p-1 shadow-xl">
            <div className="flex h-full flex-col rounded-[0.9rem] bg-ink-soft p-1.5">
              <div className="mx-auto mb-2 h-1 w-6 rounded-full bg-white/15" />
              <div className="flex-1 rounded-lg bg-gradient-to-b from-flame/20 to-transparent" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
