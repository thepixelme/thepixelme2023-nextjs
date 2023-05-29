import styled from 'styled-components'
import { breakpoints } from '../Breakpoint.styles'
import { Container, zindex } from '../Shared.styles'

import { motion } from 'framer-motion' // for scroll animation

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
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  @media ${breakpoints.large} {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
  }
`

export const StackCard = styled(motion.div)` // motion.div from framer-motion
  width: 100%;
  max-width: 345px;
  min-height: auto;
  margin: 0 0 40px 0;
  padding: 20px;
  border-radius: 10px;

  background-color: rgba( ${({ theme }) => theme.brand1RGB}, 0.1 );
  backdrop-filter: blur(25px); 
  -webkit-backdrop-filter: blur(25px); /* For Safari support */

  @media ${breakpoints.large} {
    width: 31%;
    max-width: 100%;
    margin: 0 1% 1% 0;
    padding: 40px;
  }

  span {
    font-size: 2.25rem; /* 36px */
  }
  

  h3 {
    margin: 0 0 15px 0;
    font-size: 2.625rem;
    font-weight: bold;
  }

  p {
    margin: 0 0 20px 0;
    border-top: 1px solid rgba( ${({ theme }) => theme.brand1RGB}, 0.1 );
    padding-top: 20px;

    &:last-child {
      font-size: 0.875rem; /* 14px */
      opacity: 0.8;
    }
  }
`