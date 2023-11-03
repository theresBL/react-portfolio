import styled from 'styled-components'
import { ReusableSection } from '../ReusableStyles'
import { Links, LinksDiv } from './Links'
import { StyledImg } from './Hero'
import profileImg from '../assets/images/profil.png'

export const Contact = () => {
  return (
    <ContactSection>
      <h1>Contact</h1>
      <StyledImg src={profileImg} alt='profileImage' />
      <div>
        <h2>Theres Brännberg Lendt</h2>
      </div>
      <LinksLarge>
        <Links />
      </LinksLarge>
    </ContactSection>
  )
}

const ContactSection = styled(ReusableSection)`
  gap: 4em;
`
const LinksLarge = styled(LinksDiv)`
  @media (min-width: 744px) {
    align-self: center;
  }
`