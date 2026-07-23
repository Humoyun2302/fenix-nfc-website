import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { X } from 'lucide-react'
import { useEscapeKey, useBodyScrollLock } from '@/hooks/useModal'
import { cn } from '@/utils'

type ModalProps = {
  open: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  className?: string
}

export function Modal({ open, onClose, title, children, className }: ModalProps) {
  useBodyScrollLock(open)
  useEscapeKey(onClose, open)

  useEffect(() => {
    if (!open) return
    const previouslyFocused = document.activeElement as HTMLElement | null
    return () => previouslyFocused?.focus()
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6">
          <motion.button
            type="button"
            aria-label="Закрыть"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className={cn(
              'relative z-10 max-h-[90vh] w-full overflow-y-auto rounded-t-3xl border border-white/10 bg-ink-soft p-5 shadow-2xl sm:max-w-xl sm:rounded-3xl sm:p-7',
              className,
            )}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <h3 id="modal-title" className="font-display text-xl font-semibold sm:text-2xl">
                {title}
              </h3>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-white/10 p-2 text-muted transition hover:text-white"
                aria-label="Закрыть окно"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
