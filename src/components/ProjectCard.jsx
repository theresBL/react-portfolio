import styled from 'styled-components'
import liveIcon from '../assets/icons/live.svg'
import gitIcon from '../assets/icons/github.svg'
import { ReusableButton } from './ReusableButton'


export const ProjectCard = ({ project }) => {
  const { title, img, alt, description, tags, live, github, index } = project

  return (
    <OneProject key={index}>
      <ProjectImage src={img} alt={alt} />
      <ProjectInfo>
        <h2>{title}</h2>
        <p>{description}</p>
        <TagsDiv>{tags.map((tag) => <Tag key={index}>{tag} </Tag>)}
        </TagsDiv>
        <ButtonDiv>
          <a href={live} target="_blank" rel="noopener noreferrer">
            <ReusableButton
              svg={liveIcon}
              fill='#000'
              hoverBackground='#ff847c'
              hoverColor='#FFF'
              text='Live demo'
            />
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <ReusableButton
              target="_blank"
              rel="noopener noreferrer"
              svg={gitIcon}
              fill='#000'
              hoverBackground='#79c2d0'
              hoverColor='#FFF'
              text='View code'
            />
          </a>
        </ButtonDiv>
      </ProjectInfo>
    </OneProject>
  )
}


const OneProject = styled.div`
display: flex;
flex-direction: column;
align-self: flex-start;
gap: 1em;

@media (min-width: 744px) {
  flex-direction: row;
}

@media (min-width: 1280px) {
}

`

const ProjectImage = styled.img`
height: auto;
width: 100%;
border-left:0.625em solid #333;
border-bottom: 0.625em solid #333;
object-fit: contain;

@media (min-width: 744px) {
  height: 17.5em;
  width: 12.5em;
}

@media (min-width: 1280px) {
  width: 17.5em;
}
`

const ProjectInfo = styled.div`
display: flex;
flex-direction: column;
gap: 1em;
`

const TagsDiv = styled.div`
display: flex;
flex-wrap: wrap;
gap: 0.25em;
`

const Tag = styled.span`
background-color: #000;
color: #FFF;
padding: 0.125em 0.375em; 
`
const ButtonDiv = styled.div`
display: flex;
flex-direction: column;
gap: 1em;
margin-top: 0.5em;

@media (min-width: 744px) {
flex-direction: row;
}
`