/* eslint-disable react/prop-types */
import styled from 'styled-components'
import { ReusableButton } from './ReusableButton'
import liveIcon from '../assets/icons/live.svg'
import gitIcon from '../assets/icons/github.svg'

export const ProjectCard = ({ title, img, alt, description, tags, live, github }) => {
  return (
    <OneProject>
      <ProjectImage src={img} alt={alt} />
      <ProjectInfo>
        <h2>{title}</h2>
        <p>{description}</p>
        <TagsDiv>{tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}</TagsDiv>
        <ButtonDiv>
          <a href={live} target="_blank" rel="noopener noreferrer">
            <ReusableButton
              svg={liveIcon}
              fill='#000'
              hoverBackground='#000'
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
              hoverBackground='rgb(187,134,0)'
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
`;

const ProjectImage = styled.img`
  height: 12.5em;
  width: 100%;
  border-left: 0.625em solid #333;
  border-bottom: 0.625em solid #333;
  object-fit: contain;

  @media (min-width: 744px) {
    height: 17.5em;
    width: 12.5em;
  }

  @media (min-width: 1280px) {
    width: 17.5em;
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const TagsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25em;
`;

const Tag = styled.span`
  background-color: #000;
  color: #fff;
  padding: 0.125em 0.375em;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 0.5em;

  @media (min-width: 744px) {
    flex-direction: row;
  }
`
