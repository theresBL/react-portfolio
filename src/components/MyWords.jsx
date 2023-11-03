import styled from 'styled-components'
import docIcon from '../assets/icons/doc.svg'
import git from '../assets/icons/github.svg'
import { ReusableButton } from './ReusableButton'
import { ReusableSection } from '../ReusableStyles'
import { FlexColumn } from '../ReusableStyles'


export const MyWords = () => {
  return (
    <StyledMyWords>
      <h1>My Words</h1>
      <OneArticle>
        <H2span>March 2023</H2span>
        <h3>Changing careers:<br />a huge life changing step</h3>
        <p>After working as a physiotherapist for several years,
          I began to feel that something was missing.
          I was no longer feeling fulfilled in my job and knew that I needed a change.</p>
        <a href='https://medium.com/@tbrannberglendt/changing-careers-a-huge-life-changing-step-f05636f5edc' target="_blank" rel="noopener noreferrer">
          <ReusableButton
            svg={docIcon}
            fill='#000'
            hoverBackground='#c7b198'
            hoverColor='#FFF'
            text='Read'
          />
        </a>
      </OneArticle>

      <OneArticle>
        <H2span>March 2023</H2span>
        <h3>The power of a team: <br />my experiences as a former athlete</h3>
        <p>While the benefits of being an elite athlete are obvious in terms of physical fitness and performance,
          there are also many advantages that can translate into valuable skills in your professional career and in life.</p>
        <a href='https://medium.com/@tbrannberglendt/the-power-of-team-sports-cfda106c4429' target="_blank" rel="noopener noreferrer">
          <ReusableButton
            svg={docIcon}
            fill='#000'
            hoverBackground='#c7b198'
            hoverColor='#FFF'
            text='Read'
          />
        </a>
      </OneArticle>

    </StyledMyWords>
  )
}

const StyledMyWords = styled(ReusableSection)`
 padding: 8em 0.9em;
 height: auto;
 gap: 4em;

  @media (min-width: 744px) {
    padding: 4em;
  }

  @media (min-width: 1280px) {
    padding: 12em;
  }
`

const OneArticle = styled(FlexColumn)`
  align-items: flex-start;
  gap: 1.5em;
`

const H2span = styled.h2`
  background-color: black;
  color: white;
  width: fit-content;
  padding: 0 0.1em;
`