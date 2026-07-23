import { ContactForm } from '@/components/ContactForm'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { siteConfig } from '@/data/site'

export function ContactSection() {
  return (
    <section id="contact" className="section-pad py-24 sm:py-32">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            title="Оставить заявку"
            description="Расскажите о задаче — предложим формат и срок."
          />
          <div className="mt-10 space-y-2 text-sm text-muted">
            <p>
              <a href={siteConfig.contacts.phoneHref} className="text-soft transition hover:text-white">
                {siteConfig.contacts.phone}
              </a>
            </p>
            <p>
              <a href={siteConfig.contacts.emailHref} className="text-soft transition hover:text-white">
                {siteConfig.contacts.email}
              </a>
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
