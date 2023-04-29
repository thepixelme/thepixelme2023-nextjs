import { useState } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { LightTheme, DarkTheme } from '@/components/Shared.styles'
import GlobalStyle from '@/components/Global.styles'

export default function App({ Component, pageProps }: AppProps) {

  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={ theme == 'light' ? LightTheme : DarkTheme }>
      <GlobalStyle />
      <Component {...pageProps} />
      <button onClick={toggleTheme}>Switch Theme</button>
    </ThemeProvider>
  )
}
