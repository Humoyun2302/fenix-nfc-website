import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/Logo'
import { Button } from '@/components/Button'
import { navLinks } from '@/data/site'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrollY } from '@/hooks/useScrollY'
import { useBodyScrollLock } from '@/hooks/useModal'
import { cn } from '@/utils'

export function Header() {
  const scrolled = useScrollY(16)
  const activeId = useActiveSection()
  const [menuOpen, setMenuOpen] = useState(false)
  useBodyScrollLock(menuOpen)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || menuOpen
          ? 'border-b border-white/8 bg-ink/80 backdrop-blur-xl'
          : 'bg-transparent',
      )}
    >
      <div className="section-pad">
        <div className="container-shell flex h-16 items-center justify-between sm:h-18">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Основная навигация">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={cn(
                  'rounded-full px-3 py-2 text-sm transition-colors',
                  activeId === link.id ? 'text-white' : 'text-muted hover:text-white',
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="#contact" as="a" magnetic>
              Получить консультацию
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="border-t border-white/8 bg-ink/95 backdrop-blur-xl lg:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav
              className="section-pad container-shell flex flex-col gap-1 py-4"
              aria-label="Мобильная навигация"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  onClick={closeMenu}
                  className={cn(
                    'rounded-2xl px-4 py-3 text-base',
                    activeId === link.id ? 'bg-white/[0.04] text-white' : 'text-muted',
                  )}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * index }}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-3">
                <Button
                  href="#contact"
                  as="a"
                  className="w-full"
                  onClick={() => {
                    closeMenu()
                  }}
                >
                  Получить консультацию
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
