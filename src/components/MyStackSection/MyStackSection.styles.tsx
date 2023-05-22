import styled from 'styled-components'
import { breakpoints } from '../Breakpoint.styles'
import { Container, zindex } from '../Shared.styles'

/**
 * Stack Section
 */
export const StackWrapper = styled.section`
`

export const StackContainer = styled(Container)`
  position: relative;
`

/**
 * Stack Card
 */
export const StackCardWrapper = styled.div`
  display: block;

  @media ${breakpoints.large} {
    display: flex;
    justify-content: space-between;
  }
`

export const StackCard = styled.div`
  width: 100%;
  min-height: auto;
  margin: 0 0 20px 0;
  padding: 20px;
  border-radius: 10px;

  /* background-color: rgba( 255, 255, 255, 0.2 ); */
  background-color: rgba( ${({ theme }) => theme.brand1RGB}, 0.1 );
  backdrop-filter: blur(25px); 
  -webkit-backdrop-filter: blur(10px); /* For Safari support */

  @media ${breakpoints.large} {
    width: 31%;
    margin: 0 1% 1% 0;
    padding: 40px;
  }

  span {
    font-size: 2.25rem; /* 36px */
  }
  

  h3 {
    margin: 0 0 20px 0;
    font-size: 2.625rem;
    font-weight: bold;
  }

  p {
    margin: 0 0 20px 0;

    &:last-child {
      font-size: 0.875rem; /* 14px */
      opacity: 0.8;
    }
  }
`