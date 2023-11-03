import gitHubIcon from '../assets/icons/github.svg'
import linkedInIcon from '../assets/icons/linkedin.svg'
import slackIcon from '../assets/icons/slack.svg'
import styled from 'styled-components'

export const Links = () => {
  return (
    <LinksDiv>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/theres-br%C3%A4nnberg-lendt-222770139/"
      >
        <Icon
          aria-label="visit my linked profile in"
          src={linkedInIcon}
          alt="linked-in-icon"
        />
      </a>

      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/theresBL'
      >
        <Icon
          aria-label='visit my github in'
          src={gitHubIcon}
          alt='github-icon'
        />
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://technigo.slack.com/team/U04EEKLJ6H2"
      >
        <Icon
          aria-label="visit my slack profile in"
          src={slackIcon}
          alt="slack-icon"
        />
      </a>
    </LinksDiv>
  )
}

export const LinksDiv = styled.div`
  display: flex;
  gap: 2em;

  @media (min-width: 744px) {
  align-self: flex-start;
  }
`

const Icon = styled.img`
width: 2em;
height: 2em;
transition: filter 0.7s;

@media (min-width: 744px) {
  width: 3em;
  height: 3em;
}

&:hover {
  filter: brightness(0%);
}

path {
  fill: #c7b198;
}
`