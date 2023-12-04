import Slider from 'react-slick'
import styled from 'styled-components'
import { ProjectCard } from './ProjectCard'
import { ProjectsData } from './ProjectsData'

export const ProjectsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 15,
    slidesToScroll: 3,
  }

  return (
    <StyledSlider {...settings}>
      {ProjectsData.map((project) => (
        <StyledSlide key={index}>
          <ProjectCard project={project} />
        </StyledSlide>
      ))}
    </StyledSlider>
  )
}

const StyledSlider = styled(Slider)`
  width: 80%; /* Adjust the width as needed */
  margin: 0 auto; /* Center the slider */
  height: 200px;
  .slick-prev,
  .slick-next {
    color: black; // Customize the arrow color
  }

  .slick-dots {
    bottom: 10px; // Adjust the dots position
  }
`

const StyledSlide = styled.div`
 border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  margin-right: 10px;
 `
