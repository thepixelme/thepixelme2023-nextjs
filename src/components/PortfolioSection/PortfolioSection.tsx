import { useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiArrowUpRight } from "react-icons/hi2";
import SectionHeader from '../SectionHeader/SectionHeader'
import { 
  PortfolioWrapper, PortfolioContainer,
  Portfolio, PortfolioItem
} from './PortfolioSection.styles'

export default function PortfolioSection() {
  return (
    <PortfolioWrapper>
      <PortfolioContainer>
        <SectionHeader text="My Works" />

        <Portfolio>
          <PortfolioItem>
            <h3>Zoom Clone</h3>
            <p>Fully functional video conferencing web app, with secure real-time interactions, invitations, scheduling system, etc.</p>
            <a href="https://zoom-clone-2-indol.vercel.app/">Link <span><HiArrowUpRight /></span></a>
          </PortfolioItem>

          <PortfolioItem>
            <h3>Mobile Apps</h3>
            <p>Android and iOS mobile apps featuring live stream audio and video, on-demand podcasts, news, and of course, live score (when a game is live).</p>
            <a href="https://play.google.com/store/apps/details?id=com.bonneville.kslsports">Android <span><HiArrowUpRight /></span></a>
            <a href="https://apps.apple.com/us/app/seattle-sports-710-am/id599739395">iOS <span><HiArrowUpRight /></span></a>
          </PortfolioItem>
        </Portfolio>

      </PortfolioContainer>
    </PortfolioWrapper>
  )
}
