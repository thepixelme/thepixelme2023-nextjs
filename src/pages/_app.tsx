import { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { LightTheme, DarkTheme } from '@/components/Shared.styles'
import GlobalStyle from '@/components/Global.styles'

export default function App({ Component, pageProps }: AppProps) {

  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const selectedTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(selectedTheme);
    localStorage.setItem('theme', selectedTheme);
  }

  return (
    <ThemeProvider theme={ theme == 'light' ? LightTheme : DarkTheme }>
      <GlobalStyle />
      <Component {...pageProps} toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}
