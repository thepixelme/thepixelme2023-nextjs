import Head from 'next/head'
import SiteHeader from '@/components/SiteHeader/SiteHeader'
import HeroSection from '@/components/HeroSection/HeroSection'
import MyStackSection from '@/components/MyStackSection/MyStackSection'

type HomePageProps = {
  toggleTheme?: () => void;
  theme: string;
}

export default function Home({ toggleTheme, theme } : HomePageProps) {
  return (
    <>
      <Head>
        <title>Home | ThePixelMe.com</title>
        <meta name="description" content="Nhat Nguyen, React & React Native Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SiteHeader toggleTheme={toggleTheme} theme={theme} />

      <HeroSection />
      <MyStackSection />

      <main>
      </main>
    </>
  )
}
