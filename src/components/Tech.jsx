import styled from 'styled-components'
import { ReusableSection } from '../ReusableStyles'

export const Tech = () => {
  return (
    <StyledTech>
      <h1>Tech</h1>
      <p>HTML, CSS, Flexbox, CSS Grid, <span>JavaScript</span>, GitHub, API:s, ES6, Accessability, <span>mob-programming</span>, Mongo DB, pair-programming, Zustand, <span>Redux</span>, JSX, <span>React</span></p>
    </StyledTech>
  )
}

const StyledTech = styled(ReusableSection)`
  background-color: #f0ece2;
  line-height: 32px;
  gap: 64px;

  p {
    text-align: center;
    font-weight: 300;
  }

  span:nth-child(1) {
  background: #c7b198;
  color: white;
  }

  span:nth-child(2) {
  /* background: #ff847c; */
  background: rgb(203,197,178);
  color: white;
  }

  span:nth-child(3) {
  /* background: #79c2d0; */
  background:  rgb(187,134,0);
  color: white;
  }

  span:nth-child(4) {
  background: #333;
  color: white;
  }
`