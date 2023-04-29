import styled from "styled-components";
import { breakpoints } from "./Breakpoint.styles";

/**
 * Colors
 * 
 * using the AIR (Attribute, ID, Relation) convention for color naming
 * https://levelup.gitconnected.com/air-naming-css-color-variables-437cb4d261a6
 * 
 * Attribute: brand, site, accent, success, error, warning, info, etc
 * ID: 1, 2, 3, etc  (primary, secondary, teritary, etc.)
 * Relation: contrast, variation, 1, 2, 3, a, b, c, etc
 */

const palette = {
  black: '#111111',
  white: '#ffffff',
  blackBlue: '#012439',
  blackBlueRGB: '1, 36, 57',
  darkBlue: '#083661',
  darkBlueRGB: '8, 54, 97',
  lightBlue: '#0284ea',
  lightBlueRGB: '2, 132, 234',
  paleBlue: '#ebf7ff',
  paleBlue2: '#cae9ff',
  paleBlue2RGB: '202, 233, 255',
  teal: '#64f0ff',
}

export const LightTheme = {
  brand1: palette.darkBlue,
  brand1RGB: palette.darkBlueRGB,
  accent1: palette.lightBlue,
  accent1RGB: palette.lightBlueRGB,
  site1: palette.blackBlue,
  site2: palette.paleBlue,
  site2RGB: palette.paleBlue2RGB,
}

export const DarkTheme = {
  brand1: palette.paleBlue2,
  brand1RGB: palette.paleBlue2RGB,
  accent1: palette.teal,
  site1: palette.paleBlue,
  site2: palette.blackBlue,
  site2RGB: palette.blackBlueRGB,
}

/**
 * z-index, following Bootstrap's z-index scale
 */

export const zindex = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  offCanvas: 1050,
  modal: 1060,
  popover: 1070,
  tooltip: 1080,
}

/**
 * Container (common container for site content)
 */
export const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
  max-width: 1140px;

  @media (min-width: ${breakpoints.xsmall}) {
    padding: 0 20px;
  }
`