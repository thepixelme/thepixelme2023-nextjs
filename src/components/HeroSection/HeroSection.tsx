import {
  Hero, HeroContainer,
  Heading, SubHeading,
} from './HeroSection.styles'

export default function HeroSection() {

  return (
    <Hero>
      <HeroContainer>
        <Heading>{"Hi, I'm Nhat, a Coder & Director from the USA, Earth"}</Heading>
        <SubHeading>I serve as the bridge connecting technology and business.</SubHeading>
      </HeroContainer>
    </Hero>
  )
}
