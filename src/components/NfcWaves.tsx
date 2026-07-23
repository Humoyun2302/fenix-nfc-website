import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/utils'

type NfcWavesProps = {
  active?: boolean
  className?: string
  size?: number
}

export function NfcWaves({ active = true, className, size = 160 }: NfcWavesProps) {
  const reduced = useReducedMotion()
  const rings = [0, 1, 2]

  return (
    <div
      className={cn('pointer-events-none relative flex items-center justify-center', className)}
      style={{ width: size, height: size }}
      aria-hidden
    >
      {rings.map((ring) => (
        <motion.span
          key={ring}
          className="absolute rounded-full border border-flame/40"
          style={{
            width: size * (0.35 + ring * 0.22),
            height: size * (0.35 + ring * 0.22),
          }}
          initial={{ opacity: 0.15, scale: 0.85 }}
          animate={
            reduced || !active
              ? { opacity: 0.2, scale: 1 }
              : {
                  opacity: [0.05, 0.45, 0.05],
                  scale: [0.9, 1.08, 0.9],
                }
          }
          transition={{
            duration: 2.4,
            delay: ring * 0.35,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      <span className="relative z-10 h-3 w-3 rounded-full bg-flame shadow-[0_0_24px_rgba(255,106,43,0.85)]" />
    </div>
  )
}
