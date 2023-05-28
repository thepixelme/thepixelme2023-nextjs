import { useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiCreditCard, HiCommandLine, HiChatBubbleLeftEllipsis } from "react-icons/hi2"
import SectionHeader from '../SectionHeader/SectionHeader'
import { 
  PortfolioWrapper, PortfolioContainer,
  PortfolioItem, PortfolioImageWrapper, PortfolioInfoWrapper
} from './PortfolioSection.styles'

export default function PortfolioSection() {
  return (
    <PortfolioWrapper>
      <PortfolioContainer>

        <PortfolioItem>
          <PortfolioImageWrapper>

          </PortfolioImageWrapper>

          <PortfolioInfoWrapper>
            <h3>Portfolio Item Name</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </PortfolioInfoWrapper>
        </PortfolioItem>

        <PortfolioItem>
          <PortfolioImageWrapper>

          </PortfolioImageWrapper>

          <PortfolioInfoWrapper>
            <h3>Portfolio Item Name</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </PortfolioInfoWrapper>
        </PortfolioItem>

        <PortfolioItem>
          <PortfolioImageWrapper>

          </PortfolioImageWrapper>

          <PortfolioInfoWrapper>
            <h3>Portfolio Item Name</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </PortfolioInfoWrapper>
        </PortfolioItem>

      </PortfolioContainer>
    </PortfolioWrapper>
  )
}
