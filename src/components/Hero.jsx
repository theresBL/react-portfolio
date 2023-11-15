import profileImg from '../assets//images/profil.png'
import styled from 'styled-components'
import { ReusableSection } from '../ReusableStyles'
import { FlexColumn } from '../ReusableStyles'
import { Links } from './Links'
import tblImg from '../assets/images/TBL1.png'
import { BurgerMenu } from './BurgerMenu'

export const Hero = () => {
  return (
    <HeroSection>
      <BurgerMenu />
      <HeroContent>
        <StyledImg src={profileImg} alt='profileImage' />
        <StyledPresentation>
          <div>
            <Name>Theres Brännberg Lendt</Name>
            <h4>Frontend Developer</h4>
          </div>
        </StyledPresentation>
        <p>I am a frontend developer with a passion for creating beautiful, responsive, and user-friendly websites. I am a self taught problem solver who never backs down for a good debugging issue.</p>
        <Links />
      </HeroContent>
      <TBL><TBLimg src={tblImg} /></TBL>
    </HeroSection>
  )
}

const HeroSection = styled(ReusableSection)`
  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    align-content: center;
    padding: 0;
  }
`

const HeroContent = styled(FlexColumn)`
  gap: 2em;

  @media (min-width: 744px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    align-content: center;
    padding: 10%;
  }
`

export const StyledImg = styled.img`
  width: 164px;
  height: 164px;
  border-radius: 50%;

`

export const StyledPresentation = styled.div`
  h4 {
  color: #79c2d0;
  font-size: 2em;

  @media (min-width: 743px) {
    font-size: 3.2em;
  }

  @media (min-width: 1280px) {
    font-size: 2.9em;
  }

  }

  @media (min-width: 743px) {
  grid-column: 1 / span 2;
  grid-row: 1;
  align-items: flex-start;
  }
`

const Name = styled.h3`
  font-size: 1.125em;

  @media (min-width: 743px) {
    font-size: 1.5em;
  }
`

const TBL = styled.div`
  background-color: black;
  display: none;

  @media (min-width: 1280px) {
    display: block;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const TBLimg = styled.img`
  @keyframes vaporize {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}
  width: 50%;
  animation: vaporize 2s ease-in-out;
`

