import styled from 'styled-components'
import { breakpoints } from '../Breakpoint.styles'
import { Container } from '../Shared.styles'

/**
 * Hero
 */
export const Hero = styled.section`
  padding: 50px 0;
  min-height: 90vh;

  display: flex;
  justify-content: center;
  align-items: center;
`

/**
 * Container
 */
export const HeroContainer = styled(Container)`
  position: relative;
  width: 100%;
  max-width: 640px;

  text-align: center;
  color: ${({ theme }) => theme.brand1};

  @media ${breakpoints.medium} {
  }
`

/**
 * Heading
 */

export const Heading = styled.h1`
  margin: 0 auto 20px auto;
  font-size: 2rem; // 32px

  @media ${breakpoints.medium} {
    font-size: 2.5rem; // 40px
  }
`

/**
 * SubHeading
 */

export const SubHeading = styled.h2`
  font-size: 1rem; // 16px
  font-weight: 400;
  line-height: 1.5;

  @media ${breakpoints.medium} {
    font-size: 1.125rem; // 18px
  }
`