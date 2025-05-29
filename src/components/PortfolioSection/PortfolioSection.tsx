import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiArrowUpRight } from "react-icons/hi2";
import SectionHeader from '../SectionHeader/SectionHeader'
import {
  PortfolioWrapper, PortfolioContainer,
  Portfolio, PortfolioItem
} from './PortfolioSection.styles'

export default function PortfolioSection() {

  const ref = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  /**
   * Check screen width
   */
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1040);
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  /** ##End screen width */

  /**
   * framer-motion scroll animation
   */

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  })

  // Always call hooks, but conditionally apply their results
  const raw_card_y1 = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const card_y1 = isDesktop ? raw_card_y1 : 0;

  /** ##End frame-motion */

  return (
    <PortfolioWrapper>
      <PortfolioContainer>
        <SectionHeader text="My Works" />

        <Portfolio>
          <PortfolioItem style={{ y:card_y1 }}>
            <h3>AI Domain Generator</h3>
            <p>Generate creative domain names and instantly verify their availability, powered by Google Gemini</p>
            <a href="https://ai-domain-generator.thepixelme.com/">Link <span><HiArrowUpRight /></span></a>
          </PortfolioItem>

          <PortfolioItem style={{ y:card_y1 }}>
            <h3>KSL News Sites</h3>
            <p>High-traffic local news sites with millions of visits per month, with optimized delivery of all content types, including livestream media.</p>
            <a href="https://kslsports.com/">KSLSports<span><HiArrowUpRight /></span></a>
            <a href="https://kslnewsradio.com/">KSLNewsradio<span><HiArrowUpRight /></span></a>
            <a href="https://ksltv.com/">KSLTV<span><HiArrowUpRight /></span></a>
          </PortfolioItem>

          <PortfolioItem style={{ y:card_y1 }}>
            <h3>Zoom Clone</h3>
            <p>Fully functional video conferencing web app, with secure real-time interactions, invitations, scheduling system, etc.</p>
            <a href="https://zoom-clone-2-indol.vercel.app/">Link <span><HiArrowUpRight /></span></a>
          </PortfolioItem>

          <PortfolioItem style={{ y:card_y1 }}>
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
