import { ArrowUp, Send, Phone, Mail } from 'lucide-react'
import { Logo } from '@/components/Logo'
import { navLinks, siteConfig } from '@/data/site'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/8 bg-ink-soft">
      <div className="section-pad py-14 sm:py-16">
        <div className="container-shell grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={siteConfig.contacts.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted transition hover:text-white"
                aria-label="Instagram FENIX NFC"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.contacts.telegram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted transition hover:text-white"
                aria-label="Telegram FENIX NFC"
              >
                <Send className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Навигация
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className="text-sm text-soft transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted">
              Контакты
            </p>
            <ul className="space-y-3 text-sm text-soft">
              <li>
                <a
                  href={siteConfig.contacts.phoneHref}
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  <Phone className="h-4 w-4 text-flame" />
                  {siteConfig.contacts.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contacts.emailHref}
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  <Mail className="h-4 w-4 text-flame" />
                  {siteConfig.contacts.email}
                </a>
              </li>
              <li className="text-muted">{siteConfig.contacts.address}</li>
              <li className="text-muted">{siteConfig.contacts.workingHours}</li>
            </ul>
          </div>
        </div>

        <div className="container-shell mt-12 flex flex-col gap-4 border-t border-white/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {year} {siteConfig.name}. Все права защищены.
          </p>
          <a
            href="#hero"
            className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 px-4 py-2 text-xs text-soft transition hover:text-white sm:self-auto"
            aria-label="Вернуться наверх"
          >
            Наверх
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
