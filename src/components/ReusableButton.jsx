import styled from 'styled-components'

export const ReusableButton = ({ backgroundColor, color, svg, text, fill }) => {
  return (
    <StyledButton backgroundColor={backgroundColor} color={color}>
      {svg && <img src={svg} alt="Button Icon" style={{ fill }} />}
      {text}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};

  gap: 0.438em;
  border: none;
  border-radius: 2.5em;
  padding-right: 1em;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  font-size: 1.25em;
  cursor: pointer;
  transition: background-color 0.5s, color 0.5s;

  &:hover {
    background-color: ${(props) => props.hoverBackground};
    color: ${(props) => props.hoverColor};
   
    img {
      filter: brightness(500%);
    }
  }

  img {
    width: 2em;
    height: 2em;
    filter: brightness(0%)
  }
`