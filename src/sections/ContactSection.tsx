import { ContactForm } from '@/components/ContactForm'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { siteConfig } from '@/data/site'

export function ContactSection() {
  return (
    <section id="contact" className="section-pad py-16 sm:py-24">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="Контакты"
            title="Получите консультацию и расчёт"
            description="Расскажите о задаче — предложим формат, тираж и срок запуска под ваш бизнес."
          />
          <div className="mt-8 space-y-3 text-sm text-muted">
            <p>
              Телефон:{' '}
              <a href={siteConfig.contacts.phoneHref} className="text-soft hover:text-white">
                {siteConfig.contacts.phone}
              </a>
            </p>
            <p>
              Email:{' '}
              <a href={siteConfig.contacts.emailHref} className="text-soft hover:text-white">
                {siteConfig.contacts.email}
              </a>
            </p>
            <p>{siteConfig.contacts.workingHours}</p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.02] p-5 sm:p-7">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
