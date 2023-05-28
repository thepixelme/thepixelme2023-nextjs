import styled from 'styled-components'
import { breakpoints } from '../Breakpoint.styles'
import { Container, zindex } from '../Shared.styles'

import { motion } from 'framer-motion' // for scroll animation

/**
 * Portfolio Section
 */
export const PortfolioWrapper = styled.section`
  padding: 100px 0;
`

export const PortfolioContainer = styled(Container)`
  position: relative;
`

/**
 * Portfolio Card
 */

export const PortfolioItem = styled(motion.div)` // motion.div from framer-motion
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-bottom: 60px;
`

export const PortfolioImageWrapper = styled.div`
  min-height: 400px;
  width: 50%;
  background: gray;
`

export const PortfolioInfoWrapper = styled.div`
  width: 50%;
  padding: 40px;

  h3 {
    margin: 0 0 15px 0;
    font-size: 36px;
  }
`