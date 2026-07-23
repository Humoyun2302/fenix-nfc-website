import type { MouseEvent, ReactNode } from 'react'
import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '@/utils'
import { useReducedMotion } from '@/hooks/useReducedMotion'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'md' | 'lg'

type CommonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  magnetic?: boolean
  children: ReactNode
  className?: string
  disabled?: boolean
}

type ButtonProps =
  | (CommonProps & {
      as?: 'button'
      type?: 'button' | 'submit' | 'reset'
      href?: undefined
      onClick?: (event: MouseEvent<HTMLButtonElement>) => void
    })
  | (CommonProps & {
      as: 'a'
      href: string
      type?: undefined
      onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
    })

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-flame text-white shadow-[0_0_0_1px_rgba(255,106,43,0.35),0_10px_40px_rgba(255,106,43,0.25)] hover:bg-flame-soft',
  secondary:
    'bg-transparent text-white hairline hover:border-white/25 hover:bg-white/[0.03]',
  ghost: 'bg-transparent text-soft hover:text-white',
}

const sizes: Record<ButtonSize, string> = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-sm sm:h-[3.25rem] sm:px-7 sm:text-base',
}

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    magnetic = false,
    className,
    children,
    disabled,
    onClick,
  } = props

  const reduced = useReducedMotion()
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 })
  const enableMagnetic = magnetic && !reduced

  const onMove = (event: MouseEvent) => {
    if (!enableMagnetic || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const offsetX = event.clientX - rect.left - rect.width / 2
    const offsetY = event.clientY - rect.top - rect.height / 2
    x.set(offsetX * 0.25)
    y.set(offsetY * 0.25)
  }

  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-300',
    'disabled:pointer-events-none disabled:opacity-50',
    variants[variant],
    sizes[size],
    className,
  )

  const motionStyle = enableMagnetic ? { x: springX, y: springY } : undefined

  if (props.as === 'a') {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={props.href}
        className={classes}
        style={motionStyle}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onClick={onClick as ((event: MouseEvent<HTMLAnchorElement>) => void) | undefined}
        whileTap={reduced ? undefined : { scale: 0.98 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={props.type ?? 'button'}
      className={classes}
      style={motionStyle}
      disabled={disabled}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick as ((event: MouseEvent<HTMLButtonElement>) => void) | undefined}
      whileTap={reduced ? undefined : { scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}
