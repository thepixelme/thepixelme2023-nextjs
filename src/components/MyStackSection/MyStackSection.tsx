import { useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiCreditCard, HiCommandLine, HiChatBubbleLeftEllipsis } from "react-icons/hi2"
import SectionHeader from '../SectionHeader/SectionHeader'
import { 
  StackWrapper, StackContainer,
  StackCardWrapper, StackCard
} from './MyStackSection.styles'

export default function MyStackSection() {

  /**
   * framer-motion scroll animation
   */
  const { scrollYProgress } = useScroll();

  // const header_opacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  
  const card_opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const card_y1 = useTransform(scrollYProgress, [0, 1], [-220, 0]);
  const card_y2 = useTransform(scrollYProgress, [0, 1], [-100, 0]);
  const card_y3 = useTransform(scrollYProgress, [0, 1], [-180, 0]);

  const card_text_opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  /** ##End frame-motion */


  return (
    <StackWrapper>

        <StackContainer>
          {/* <motion.div style={{ opacity:header_opacity }}>
            <SectionHeader text="What I Do" />
          </motion.div> */}

          <StackCardWrapper>

            <StackCard style={{ opacity:card_opacity, y:card_y1 }}>
              <span><HiCreditCard /></span>

              <h3>Front End</h3>
              
              <motion.div style={{ opacity:card_text_opacity }}>
                <p>
                  I build what the users see and interact with on a website or app, ensuring that everything looks good across multiple devices.
                </p>

                <p>HTML, CSS, SASS, Styled Component, NextJS, React, React Native</p>
              </motion.div>
            </StackCard>

            <StackCard style={{ opacity:card_opacity, y:card_y2 }}>
              <span><HiCommandLine /></span>

              <h3>Back End</h3>

              <motion.div style={{ opacity:card_text_opacity }}>
                <p>
                  I work on the server-side parts of a website or app, handling the logics, databases, and overall functionality that power the front-end.
                </p>

                <p>PHP, NodeJS, WordPress, Firebase, AWS Cognito, DynamoDB, Amplify, S3, CloudFront, AppSync, Lambda, LightSail</p>
              </motion.div>
            </StackCard>

            <StackCard style={{ opacity:card_opacity, y:card_y3 }}>
              <span><HiChatBubbleLeftEllipsis /></span>

              <h3>Consultation</h3>

              <motion.div style={{ opacity:card_text_opacity }}>
                <p>I help plan out the technology stack, identify potential issues, and offer appropriate solution for the given time and budget.</p>

                <p>Amazon Web Services, Google Cloud Platform, Auth0, CloudFlare</p>
              </motion.div>
            </StackCard>

          </StackCardWrapper>

        </StackContainer>
    </StackWrapper>
  )
}
