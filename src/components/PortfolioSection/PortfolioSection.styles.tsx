import styled from 'styled-components'
import { breakpoints } from '../Breakpoint.styles'
import { Container, zindex } from '../Shared.styles'

import { motion } from 'framer-motion' // for scroll animation

/**
 * Portfolio Section
 */
export const PortfolioWrapper = styled.section`
  padding: 300px 0 200px 0;
`

export const PortfolioContainer = styled(Container)`
  position: relative;
`

/**
 * Portfolio
 */

export const Portfolio = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;

  @media ${breakpoints.large} {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
  }
`

export const PortfolioItem = styled(motion.div)` // motion.div from framer-motion
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
    width: 48%;
    max-width: 100%;
    margin: 0 1% 1% 0;
    padding: 40px;
  }

  span {
    display: inline-block;
    font-size: 0.9rem; /* 14px */
    line-height: 1;
    vertical-align: bottom;
    transition: all 0.3s ease;
  }

  h3 {
    margin: 0 0 15px 0;
    font-size: 2.25rem; /* 36px */
    font-weight: 700;
  }

  p {
    margin: 0 0 20px 0;
  }

  a {
    position: relative;
    display: inline-block;
    margin-right: 30px;
    color: ${({ theme }) => theme.site1};
    transition: all 0.3s ease;
  }

  a::before {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.site1};  
    transition: all 0.3s ease;
  }

  a:hover {
    color: ${({ theme }) => theme.brand1};
  }

  a:hover::before {
    width: 0;
    background-color: ${({ theme }) => theme.brand1};  
  }

  a:hover span {
    margin-bottom: 2px;
    margin-left: 2px;
  }
`