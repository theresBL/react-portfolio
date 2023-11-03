import styled from 'styled-components'

export const MyWords = () => {
  return (
    <StyledMyWords>
      <h1>My Words</h1>
      <h2>March 2023</h2>
      <h3>Changing careers:<br />a huge life changing step</h3>
      <p>After working as a physiotherapist for several years,
        I began to feel that something was missing.
        I was no longer feeling fulfilled in my job and knew that I needed a change.</p>
      <button>Read</button>

      <h2>March 2023</h2>
      <h3>The power of a team: <br />my experiences as a former athlete</h3>
      <p>While the benefits of being an elite athlete are obvious in terms of physical fitness and performance,
        there are also many advantages that can translate into valuable skills in your professional career and in life.</p>
      <button>Read</button>
    </StyledMyWords>
  )
}

const StyledMyWords = styled.section`
 padding: 0.9em;

  @media (min-width: 744px) {
    padding: 4em;
  }

  @media (min-width: 1280px) {
    padding: 12em;
  }
`