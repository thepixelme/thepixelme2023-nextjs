import { Contact, ContactContainer, Heading, Text, LinkButton } from './ContactSection.styles';

const ContactSection = () => {

  return (
    <Contact>
      <ContactContainer>
        <Heading>Get In Touch</Heading>
        <Text>
          Whether you have a question, feedback, collaboration opportunity, or simply want to say hello, please feel free to reach out to me.  
        </Text>
        <LinkButton title="Email Me" href="mailto:nhat@thepixelme.com" target="_blank">Email Me</LinkButton>
      </ContactContainer>
    </Contact>
  );
}

export default ContactSection;
