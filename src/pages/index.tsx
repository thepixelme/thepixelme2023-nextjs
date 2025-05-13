import Head from 'next/head'
import SiteHeader from '@/components/SiteHeader/SiteHeader'
import HeroSection from '@/components/HeroSection/HeroSection'
import MyStackSection from '@/components/MyStackSection/MyStackSection'
import PortfolioSection from '@/components/PortfolioSection/PortfolioSection'
import ContactSection from '@/components/ContactSection/ContactSection'
import Script from 'next/script'

type HomePageProps = {
  toggleTheme?: () => void;
  theme: string;
}

export default function Home({ toggleTheme, theme } : HomePageProps) {
  return (
    <>
      <Head>
        <title>Nhat - Coder, Director, Entrepreneur | ThePixelMe.com</title>
        <meta name="description" content="Nhat Nguyen - Coder, Director, Entrepreneur" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Google Analytics  */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-L41PJJY7PE" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-L41PJJY7PE');
        `}
      </Script>
      {/* ## END ## Google Analytics  */}

      <SiteHeader toggleTheme={toggleTheme} theme={theme} />

      <main>
        <HeroSection />
        <MyStackSection />
        <PortfolioSection />
        <ContactSection />
      </main>
    </>
  )
}
