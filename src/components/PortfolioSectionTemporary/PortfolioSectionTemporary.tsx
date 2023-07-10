import { PortfolioTemporary, PortfolioTemporaryContainer, Heading, Text, LinkButton } from './PortfolioSectionTemporary.styles';

const PortfolioSectionTemporary = () => {

  return (
    <PortfolioTemporary>
      <PortfolioTemporaryContainer>
        <Heading>My Works</Heading>
        <Text>
          {"Coming Soon! I'm in the process of reworking my portfolio to better showcase my skills and experience. Please check back later."}
        </Text>
      </PortfolioTemporaryContainer>
    </PortfolioTemporary>
  );
}

export default PortfolioSectionTemporary;
