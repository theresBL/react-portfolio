import styled from 'styled-components'

export const ReusableSection = styled.section`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  display: flex;
  padding: 0.9em;

  @media (min-width: 744px) {
    padding: 0 4em;
  }

  @media (min-width: 1280px) {
    padding: 0 12em;
  }
`

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`