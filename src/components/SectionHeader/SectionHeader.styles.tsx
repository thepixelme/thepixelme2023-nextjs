import styled from 'styled-components'
import { breakpoints } from '../Breakpoint.styles'
import { Container, zindex } from '../Shared.styles'

/**
 * Heading
 */
export const Heading = styled.h2`
  width: 100%;
  margin: 0 auto 20px auto;
  opacity: 1;
  
  font-size: 56px;
  text-align: center;
  color: ${({ theme }) => theme.brand1};

  @media ${breakpoints.large} {
    font-size: 140px;
  }
`