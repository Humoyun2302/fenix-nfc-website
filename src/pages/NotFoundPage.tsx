import { Link } from 'react-router-dom'
import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'

export function NotFoundPage() {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-hidden bg-ink">
      <div className="pointer-events-none absolute inset-0 surface-glow" aria-hidden />
      <div className="section-pad relative flex flex-1 flex-col">
        <div className="container-shell py-6">
          <Logo />
        </div>
        <div className="container-shell flex flex-1 flex-col items-start justify-center py-16">
          <p className="mb-3 text-xs uppercase tracking-[0.22em] text-flame-soft">404</p>
          <h1 className="font-display text-4xl font-semibold sm:text-5xl">Страница не найдена</h1>
          <p className="mt-4 max-w-md text-muted">
            Такой страницы нет. Вернитесь на главную и продолжите знакомство с решениями FENIX NFC.
          </p>
          <div className="mt-8">
            <Button as="a" href="/" size="lg">
              На главную
            </Button>
          </div>
          <Link to="/" className="sr-only">
            На главную
          </Link>
        </div>
      </div>
    </div>
  )
}
