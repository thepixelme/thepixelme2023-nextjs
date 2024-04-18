import styled from 'styled-components'
import { breakpoints } from '../Breakpoint.styles'
import { Container, zindex } from '../Shared.styles'

export const Contact = styled.section`
  padding: 100px  0 200px 0;

  h2 {
    margin-bottom: 20px;
    font-size: 2.5rem;
  }
`

/**
 * Container
 */
export const ContactContainer = styled(Container)`
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

export const Heading = styled.h2`
  margin: 0 auto 20px auto;
  font-size: 2rem; // 32px

  @media ${breakpoints.medium} {
    font-size: 2.5rem; // 40px
  }
`

/**
 * Text
 */

export const Text = styled.p`
  font-size: 1rem; // 16px
  font-weight: 400;
  line-height: 1.5;

  @media ${breakpoints.medium} {
    font-size: 1.125rem; // 18px
  }
`

/**
 * Link Button
 */

export const LinkButton = styled.a`
  display: inline-block;
  border: 2px solid ${({ theme }) => theme.brand1};
  border-radius: 4px;
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.brand1};
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.brand1};
    color: ${({ theme }) => theme.site2};
  }
`