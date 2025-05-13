import { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiCreditCard, HiCommandLine, HiChatBubbleLeftEllipsis } from "react-icons/hi2"
import {
  StackWrapper, StackContainer,
  StackCardWrapper, StackCard
} from './MyStackSection.styles'

export default function MyStackSection() {
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
  const raw_card_opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const raw_card_y1 = useTransform(scrollYProgress, [0, 1], [-300, 0]);
  const raw_card_y2 = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const raw_card_y3 = useTransform(scrollYProgress, [0, 1], [-200, 0]);
  const raw_card_text_opacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  const card_opacity = isDesktop ? raw_card_opacity : 1;
  const card_y1 = isDesktop ? raw_card_y1 : 0;
  const card_y2 = isDesktop ? raw_card_y2 : 0;
  const card_y3 = isDesktop ? raw_card_y3 : 0;
  const card_text_opacity = isDesktop ? raw_card_text_opacity : 1;

  /** ##End frame-motion */


  return (
    <StackWrapper ref={ref}>

        <StackContainer>

          <StackCardWrapper>

            <StackCard style={{ opacity:card_opacity, y:card_y1 }}>
              <span><HiChatBubbleLeftEllipsis /></span>

              <h3>Business</h3>

              <motion.div style={{ opacity:card_text_opacity }}>
                <p>I lead teams focused on the What, Why, and How of developing and launching innovative products that effectively solve business challenges.</p>

                <p>Product Strategy, Team Leadership, Business Analysis</p>
              </motion.div>
            </StackCard>

            <StackCard style={{ opacity:card_opacity, y:card_y2 }}>
              <span><HiCreditCard /></span>

              <h3>Front End</h3>

              <motion.div style={{ opacity:card_text_opacity }}>
                <p>
                  I build what the users see and interact with on a website or app, ensuring that everything looks good across multiple devices.
                </p>

                <p>JavaScript, React, React Native, NextJS, CMS</p>
              </motion.div>
            </StackCard>

            <StackCard style={{ opacity:card_opacity, y:card_y3 }}>
              <span><HiCommandLine /></span>

              <h3>Back End</h3>

              <motion.div style={{ opacity:card_text_opacity }}>
                <p>
                  I work on the server-side parts of a website or app, handling the logics, databases, and overall functionality that power the front-end.
                </p>

                <p>PHP, NodeJS, AWS, API</p>
              </motion.div>
            </StackCard>

          </StackCardWrapper>

        </StackContainer>
    </StackWrapper>
  )
}
