
import styled from 'styled-components'
import { ProjectsData } from './ProjectsData'
import { ProjectCard } from './ProjectCard'

export const Projects = () => {
  return (
    <ProjectsSection>
      <h1>Featured Projects</h1>
      {ProjectsData.map(({ index, ...project }) => (
        <ProjectCard key={index} {...project} />
      ))}
    </ProjectsSection>
  )
}

const ProjectsSection = styled.section`
  padding: 8em 0.9em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4em;

  @media (min-width: 744px) {
    padding: 4em;
  }

  @media (min-width: 1280px) {
    padding: 12em;
  }
`
