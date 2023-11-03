import styled from 'styled-components'
import { ReusableSection } from '../ReusableStyles'

export const Skills = () => {
  return (
    <SkillsSection>
      <h1>Skills</h1>
      <SkillsGrid>
        <SkillsBlock>
          <Code>Code</Code>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ES6</li>
            <li>GitHub</li>
            <li>React</li>
            <li>Redux</li>
            <li>Node.js</li>
          </ul>
        </SkillsBlock>
        <SkillsBlock>
          <Toolbox>Toolbox</Toolbox>
          <ul>
            <li>VSC</li>
            <li>CodeSandbox</li>
            <li>JavaScript</li>
            <li>CodePen</li>
            <li>Slack</li>
            <li>Stack Overflow</li>
            <li>Figma</li>
            <li>Postman</li>
          </ul>
        </SkillsBlock>
        <SkillsBlock>
          <Upcoming>Upcoming</Upcoming>
          <ul>
            <li>TypeScript</li>
            <li>Tailwind</li>
            <li>Material UI</li>
            <li>SCSS</li>
          </ul>
        </SkillsBlock>
        <SkillsBlock>
          <More>More</More>
          <ul>
            <li>Other</li>
            <li>Other</li>
            <li>Other</li>
            <li>Other</li>
          </ul>
        </SkillsBlock>
      </SkillsGrid>
    </SkillsSection>
  )
}

const SkillsSection = styled(ReusableSection)`
background-color: #f0ece2;
padding: 8em 0.9em;
height: auto;
gap: 4em;

@media (min-width: 744px) {
  height: 100vh;
}
`

const SkillsGrid = styled.div`
display: grid;
gap: 4em;

@media (min-width: 744px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
  }

@media (min-width: 1280px) {
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
}
  
`

const SkillsBlock = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1em;

ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
} 
`

const Code = styled.h2`
  background-color: #000;
  color: white;
  padding: 0 0.125em;
`

const Toolbox = styled.h2`
  background-color: #c7b198;
  color: white;
  padding: 0 0.125em;
  `

const Upcoming = styled.h2`
  background-color: #79c2d0;
  color: white;
  padding: 0 0.125em;
  `

const More = styled.h2`
background-color: #ff847c;
color: white;
padding: 0 0.125em;
    
  `