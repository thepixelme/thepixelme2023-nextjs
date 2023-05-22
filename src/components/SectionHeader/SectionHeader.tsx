import { 
  Heading
} from './SectionHeader.styles'

type SectionHeaderProps = {
  text: string
}

export default function SectionHeader({ text }: SectionHeaderProps) {

  return (
    <Heading>
      {text}
    </Heading>
  )
}
