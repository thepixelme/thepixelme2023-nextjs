import styled from 'styled-components'
import { breakpoints } from '../Breakpoint.styles'
import { Container, zindex } from '../Shared.styles'

/**
 * Heading
 */
export const Heading = styled.h2`
  position: absolute;
  top: -145px;
  left: 0;
  
  width: 100%;
  margin: 0 auto 20px auto;
  opacity: 1;
  
  font-size: 200px;
  text-align: center;
  color: ${({ theme }) => theme.brand1};
`