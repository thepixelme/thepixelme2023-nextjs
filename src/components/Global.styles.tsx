import { createGlobalStyle } from 'styled-components'
import { Nunito } from 'next/font/google'

const font1 = Nunito({ subsets: ['latin'] })

const GlobalStyle = createGlobalStyle`
  :root {
    --font1: ${font1.style.fontFamily}, 'Helvetica Neue', sans-serif;
  }

  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  html,
  body {
    padding: 0;
    margin: 0;

    font-family: var(--font1);
    font-size: 16px;
    font-weight: 400;
    
    background-color: ${({ theme }) => theme.site2};
    color: ${({ theme }) => theme.site1};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export default GlobalStyle