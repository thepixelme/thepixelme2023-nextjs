import { useState } from 'react'
import Link from 'next/link'
import { HiMoon, HiSun } from "react-icons/hi2";

import { 
  Header, HeaderContainer, 
  Branding, BrandLink, 
  Nav, NavTrigger, 
  ActionButtons, ActionToggleTheme
} from './SiteHeader.styles'

type SiteHeaderProps = {
  toggleTheme?: () => void;
  theme: string;
}

export default function SiteHeader({ toggleTheme, theme } : SiteHeaderProps) {

  const [navActive, setNavActive] = useState(false);

  return (
    <Header>
      <HeaderContainer>

        <NavTrigger active={navActive} onClick={ () => setNavActive( (prevNavActive) => !prevNavActive ) }>
          <span></span>
          <span></span>
          <span></span>
        </NavTrigger>

        <Branding>
          <Link href="/" passHref legacyBehavior>
            <BrandLink>
              <span>{`{`}</span>
              <span>{`:`}</span>
              <span>{`)`}</span>
            </BrandLink>
          </Link>
        </Branding>

        <Nav active={navActive}>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/courses">Courses</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </Nav>

        <ActionButtons>
          <ActionToggleTheme 
            onClick={toggleTheme}
            currentTheme={theme}
          >
            <span> <HiSun /> </span>
            <span> <HiMoon /> </span>
          </ActionToggleTheme>
        </ActionButtons>

      </HeaderContainer>
    </Header>
  )
}
