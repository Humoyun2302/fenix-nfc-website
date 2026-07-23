import { useState, type FormEvent } from 'react'
import { CheckCircle2, AlertCircle, LoaderCircle } from 'lucide-react'
import { Button } from '@/components/Button'
import { initialFormData, solutionOptions, type ContactFormData } from '@/data/form'
import type { FormStatus } from '@/types'
import { submitNetlifyForm } from '@/utils'
import { cn } from '@/utils'

const FORM_NAME = 'fenix-contact'

export function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(initialFormData)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({})

  const update = (field: keyof ContactFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const validate = () => {
    const next: Partial<Record<keyof ContactFormData, string>> = {}
    if (!form.name.trim()) next.name = 'Укажите имя'
    if (!form.phone.trim()) next.phone = 'Укажите телефон'
    if (!form.solution) next.solution = 'Выберите тип решения'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (!validate()) return

    setStatus('loading')
    try {
      await submitNetlifyForm(FORM_NAME, {
        name: form.name,
        phone: form.phone,
        company: form.company,
        solution: form.solution,
        quantity: form.quantity,
        comment: form.comment,
        'bot-field': form['bot-field'],
      })
      setStatus('success')
      setForm(initialFormData)
    } catch {
      setStatus('error')
    }
  }

  const fieldClass =
    'w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-muted/70 focus:border-flame/50'

  return (
    <form
      name={FORM_NAME}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      className="space-y-4"
      noValidate
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="hidden">
        <label>
          Не заполняйте это поле
          <input
            name="bot-field"
            value={form['bot-field']}
            onChange={(e) => update('bot-field', e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Имя" error={errors.name}>
          <input
            name="name"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            className={cn(fieldClass, errors.name && 'border-red-400/50')}
            placeholder="Как к вам обращаться"
            autoComplete="name"
            required
          />
        </Field>
        <Field label="Телефон" error={errors.phone}>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            className={cn(fieldClass, errors.phone && 'border-red-400/50')}
            placeholder="+998 __ ___ __ __"
            autoComplete="tel"
            required
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Компания">
          <input
            name="company"
            value={form.company}
            onChange={(e) => update('company', e.target.value)}
            className={fieldClass}
            placeholder="Название заведения или бренда"
            autoComplete="organization"
          />
        </Field>
        <Field label="Количество">
          <input
            name="quantity"
            value={form.quantity}
            onChange={(e) => update('quantity', e.target.value)}
            className={fieldClass}
            placeholder="Например, 10 столов"
          />
        </Field>
      </div>

      <Field label="Тип решения" error={errors.solution}>
        <select
          name="solution"
          value={form.solution}
          onChange={(e) => update('solution', e.target.value)}
          className={cn(fieldClass, errors.solution && 'border-red-400/50')}
          required
        >
          <option value="" disabled>
            Выберите вариант
          </option>
          {solutionOptions.map((option) => (
            <option key={option.value} value={option.value} className="bg-ink">
              {option.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Комментарий">
        <textarea
          name="comment"
          value={form.comment}
          onChange={(e) => update('comment', e.target.value)}
          className={cn(fieldClass, 'min-h-28 resize-y')}
          placeholder="Расскажите коротко о задаче"
        />
      </Field>

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === 'loading'}>
        {status === 'loading' ? (
          <>
            <LoaderCircle className="h-4 w-4 animate-spin" />
            Отправляем…
          </>
        ) : (
          'Отправить заявку'
        )}
      </Button>

      {status === 'success' && (
        <p className="flex items-start gap-2 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
          Заявка отправлена. Мы свяжемся с вами в ближайшее время.
        </p>
      )}
      {status === 'error' && (
        <p className="flex items-start gap-2 rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          Не удалось отправить заявку. Попробуйте ещё раз или напишите нам напрямую.
        </p>
      )}
    </form>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <label className="block space-y-2">
      <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted">{label}</span>
      {children}
      {error && <span className="block text-xs text-red-300">{error}</span>}
    </label>
  )
}
