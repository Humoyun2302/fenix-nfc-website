import { cn } from '@/utils'

type LogoProps = {
  className?: string
  markOnly?: boolean
}

export function Logo({ className, markOnly = false }: LogoProps) {
  return (
    <a
      href="#hero"
      className={cn('inline-flex items-center gap-2.5 text-white', className)}
      aria-label="FENIX NFC — на главную"
    >
      <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
        <span className="absolute inset-1 rounded-full border border-flame/40" />
        <span className="absolute inset-2 rounded-full border border-flame/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-flame shadow-[0_0_12px_rgba(255,106,43,0.9)]" />
      </span>
      {!markOnly && (
        <span className="font-display text-[15px] font-semibold tracking-[0.08em] sm:text-base">
          FENI<span className="text-flame">X</span>
          <span className="ml-1.5 text-muted">NFC</span>
        </span>
      )}
    </a>
  )
}
