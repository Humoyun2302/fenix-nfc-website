import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/sections/HeroSection'
import { QuickBenefitsSection } from '@/sections/QuickBenefitsSection'
import { SolutionsSection } from '@/sections/SolutionsSection'
import { HowItWorksSection } from '@/sections/HowItWorksSection'
import { DemoSection } from '@/sections/DemoSection'
import { BenefitsSection } from '@/sections/BenefitsSection'
import { ProjectsSection } from '@/sections/ProjectsSection'
import { OfferSection } from '@/sections/OfferSection'
import { FaqSection } from '@/sections/FaqSection'
import { ContactSection } from '@/sections/ContactSection'

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <QuickBenefitsSection />
        <SolutionsSection />
        <HowItWorksSection />
        <DemoSection />
        <BenefitsSection />
        <ProjectsSection />
        <OfferSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
