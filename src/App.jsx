import { Hero } from './components/Hero'
import { Tech } from './components/Tech'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { MyWords } from './components/MyWords'
import { Contact } from './components/Contact'
import { createGlobalStyle, styled } from 'styled-components'
import { FlexColumn } from './ReusableStyles'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Hero />
        <Tech />
        <Projects />
        <Skills />
        <MyWords />
        <Contact />
      </Main>
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto Mono', monospace;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
`

const Main = styled(FlexColumn)`
width: 100vw;


p {
   font-weight: 100;
   font-size: 1.125em;
  }

  h1 {
    font-size: 3.5em;
    
    @media (min-width: 1280px) {
      font-size: 5em;
  }
}

  h2 {
    font-size: 1.5em;

    @media (min-width: 1280px) {
      font-size: 2em;
  }
  }
`

