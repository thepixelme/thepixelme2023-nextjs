import styled from 'styled-components'
import { breakpoints } from '../Breakpoint.styles'
import { Container, zindex } from '../Shared.styles'

type SiteHeaderProps = {
  active?: boolean
  currentTheme?: string;
}

/**
 * Header
 */
export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${zindex.sticky};

  width: 100%;

  background-color: ${({ theme }) => theme.site2};
  border-bottom: 1px solid rgba( ${({ theme }) => theme.brand1RGB}, 0.1 );
`

/**
 * Container
 */
export const HeaderContainer = styled(Container)`
  position: relative;

  height: 50px;

  @media ${breakpoints.medium} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;
  }
`

/**
 * Branding / Logo
 */

export const Branding = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 0 0 0 5px;

  @media ${breakpoints.medium} {
    position: relative;
    top: auto;
    left: auto;
    transform: none;

    padding: 0;
  }
`

export const BrandLink = styled.a`
  position: relative;

  margin: 0;
  display: block;
  width: 100%;
  height: 30px;

  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.brand1};
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.accent1};
  }

  span {
    display: inline-block;
    margin-right: 3px;

    &:nth-child(2) {
      padding-bottom: 4px;
      vertical-align: middle;
    }
  }
`


/**
 * Nav
 */ 

export const Nav = styled.nav<SiteHeaderProps>`
  position: absolute;
  top: 0;
  left: ${props => props.active ? '0' : '-100%'};
  z-index: ${zindex.offCanvas};

  display: block;
  width: 100%;
  min-height: 100vh;
  padding: 50px 0;

  background-color: ${({ theme }) => theme.site2};
  transition: all 0.3s ease-in-out;

  @media ${breakpoints.medium} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: auto;
    min-height: auto;
    padding: 0;

    background-color: transparent;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: block;

    @media ${breakpoints.medium} {
      display: inline-block;
      margin-left: 30px;
      border: 0;

      &:last-child {
        border: 0;
      }
    }
  }

  a {
    position: relative;

    display: block;
    padding: 12px 15px;

    font-size: 0.875rem; // 14px
    font-weight: 400;
    text-decoration: none;
    text-align: center;
    color: ${({ theme }) => theme.brand1};
    transition: all 0.3s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.accent1};
    }

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;

      width: 0;
      height: 2px;

      background-color: ${({ theme }) => theme.brand1};
      transition: all 0.3s ease-in-out;
    }

    @media ${breakpoints.medium} {
      padding: 5px 0;
      font-size: 0.875rem; // 14px
      
      &:hover {
        color: ${({ theme }) => theme.accent1};
        background-color: transparent;

        &::before {
          width: 100%;
          background-color: ${({ theme }) => theme.accent1};
        }
      }
    }
  }
`

/**
 * Nav Trigger
 */

export const NavTrigger = styled.div<SiteHeaderProps>`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  z-index: ${zindex.offCanvas + 1};

  display: block;
  width: 24px;
	height: 16px;
  cursor: pointer;

  @media ${breakpoints.medium} {
    display: none;
  }

  span {
    position: absolute;
    left: 0;

    display: block;
		width: 100%;
    height: 2px;
    border-radius: 3px;
		opacity: 1;
    background-color: ${({ theme }) => theme.brand1};
		
		transform: rotate(0deg);
		transform-origin: left center;
		transition: all 0.3s ease-in-out;

    &:nth-child(1) {
      top: 0;
      transform-origin: left center;
    }

    &:nth-child(2) {
      top: 7px;
      right: auto;
      left: 0;
      transform-origin: right center;
    }

    &:nth-child(3) {
      top: 14px;
      transform-origin: left center;
    }
  }

  ${props => props.active && `
    span {
      &:nth-child(1) {
        transform: rotate(45deg);
      }

      &:nth-child(2) {
        width: 0;
        opacity: 0;
      }

      &:nth-child(3) {
        transform: rotate(-45deg);
        top: 17px;
      }
    }
  `}
`


/**
 * Action Buttons
 */

export const ActionButtons = styled.div`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
`

export const ActionToggleTheme = styled.button<SiteHeaderProps>`
  margin: 0;
  padding: 4px 0 0 5px;
  border-radius: 8px;
  border: 0;
  cursor: pointer;

  font-family: inherit;
  font-size: 100%;
  line-height: 1;

  background-color: transparent;
  color: ${({ theme }) => theme.brand1};;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.accent1};
  }

  ${props =>
    props.currentTheme === 'light' && `
      span:first-child {
        display: block;
        transform: scale(1.3);
      }
      span:last-child {
        display: none;
      }
    `}

  ${props =>
    props.currentTheme === 'dark' && `
      span:first-child {
        display: none;
      }
      span:last-child {
        display: block;
      }
    `}
`