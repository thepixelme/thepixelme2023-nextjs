import Head from 'next/head'
import SiteHeader from '@/components/SiteHeader/SiteHeader'
import HeroSection from '@/components/HeroSection/HeroSection'
import MyStackSection from '@/components/MyStackSection/MyStackSection'
import PortfolioSection from '@/components/PortfolioSection/PortfolioSection'
import PortfolioSectionTemporary from '@/components/PortfolioSectionTemporary/PortfolioSectionTemporary'
import ContactSection from '@/components/ContactSection/ContactSection'

type HomePageProps = {
  toggleTheme?: () => void;
  theme: string;
}

export default function Home({ toggleTheme, theme } : HomePageProps) {
  return (
    <>
      <Head>
        <title>Home | ThePixelMe.com</title>
        <meta name="description" content="Nhat Nguyen, Front-End Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SiteHeader toggleTheme={toggleTheme} theme={theme} />

      <main>
        <HeroSection />
        <MyStackSection />
        {/* <PortfolioSection /> */}
        <PortfolioSectionTemporary />
        <ContactSection />
      </main>
    </>
  )
}
