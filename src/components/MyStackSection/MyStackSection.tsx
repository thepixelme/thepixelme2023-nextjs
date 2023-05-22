import { HiCreditCard, HiCommandLine, HiChatBubbleLeftEllipsis } from "react-icons/hi2";
import SectionHeader from '../SectionHeader/SectionHeader'
import { 
  StackWrapper, StackContainer,
  StackCardWrapper, StackCard
} from './MyStackSection.styles'

export default function MyStackSection() {

  return (
    <StackWrapper>
      <StackContainer>
        {/* <SectionHeader text="What I Do" /> */}

        <StackCardWrapper>
          <StackCard>
            <span><HiCreditCard /></span>

            <h3>Front End</h3>
            
            <p>
              I build what the users see and interact with on a website or app, ensuring that everything looks good across multiple devices.
            </p>

            <p>HTML, CSS, SASS, Styled Component, NextJS, React, React Native</p>
          </StackCard>

          <StackCard>
            <span><HiCommandLine /></span>

            <h3>Back End</h3>

            <p>
              I work on the server-side parts of a website or app, handling the logics, databases, and overall functionality that power the front-end.
            </p>

            <p>PHP, NodeJS, WordPress, Firebase, AWS Cognito, DynamoDB, Amplify, S3, CloudFront, AppSync, Lambda, LightSail</p>
          </StackCard>

          <StackCard>
            <span><HiChatBubbleLeftEllipsis /></span>

            <h3>Consultation</h3>

            <p>I help plan out the technology stack, identify potential issues, and offer appropriate solution for the given the time and budget.</p>

            <p>Amazon Web Services, Google Cloud Platform, Auth0, CloudFlare</p>
          </StackCard>
        </StackCardWrapper>

      </StackContainer>
    </StackWrapper>
  )
}
