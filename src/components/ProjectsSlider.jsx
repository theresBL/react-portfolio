import styled from 'styled-components'
import Slider from 'react-slick'
import { ProjectCard } from './ProjectCard'
import { ProjectsData } from './ProjectsData'



//create carousel

export const ProjectSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <StyledSlider>
      <ModifiedSlider {...settings}>
        {ProjectsData.map(({ index, ...project }) => (
          <ProjectCard key={index} {...project} />
        ))}
      </ModifiedSlider>
    </StyledSlider >
  )
}


const StyledSlider = styled.div`
border: red 1px solid;
width: 50%;
display: flex;
align-items: center;

  /* .slick-dots li button:before {
    font-size: 1rem;
    color: #9f111b;
  } */
`

const ModifiedSlider = styled(Slider)`
`

