import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { HeroSection } from '@/sections/HeroSection'
import { SolutionsSection } from '@/sections/SolutionsSection'
import { HowItWorksSection } from '@/sections/HowItWorksSection'
import { DemoSection } from '@/sections/DemoSection'
import { OfferSection } from '@/sections/OfferSection'
import { ContactSection } from '@/sections/ContactSection'

export function HomePage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <SolutionsSection />
        <HowItWorksSection />
        <DemoSection />
        <OfferSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
