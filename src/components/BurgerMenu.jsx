import { useState } from 'react'
import styled from 'styled-components'
import hamburger from '../assets/icons/menu.svg'
import close from '../assets/icons/close.svg'

export const BurgerMenu = () => {
  const [menuActive, setMenuActive] = useState(false)

  const toggleMenu = () => {
    setMenuActive(!menuActive)
    document.body.classList.toggle('menu-open', !menuActive)
  }

  return (
    <MenuContainer>
      <ToggleIcon
        src={menuActive ? close : hamburger}
        alt={menuActive ? 'close menu icon' : 'hamburger menu icon'}
        onClick={toggleMenu}
      />
      {menuActive && (
        <Menu>
          <MenuItem>About me</MenuItem>
          <MenuItem>Projects</MenuItem>
          <MenuItem>CV</MenuItem>
          <MenuItem>Contact</MenuItem>
        </Menu>
      )}
    </MenuContainer>
  )
}

const MenuContainer = styled.div`
  position: absolute;
  top: 1.25em;
  left: 0;
  z-index: 1000;
`

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 2em;
  position: absolute;
  top: 3em ;
  left: 0;
  height: 80vh;
  width: 20em;
  background-color:rgba(255,255,255, 0.9);
  animation: slideDown 0.3s ease-in-out;
  box-shadow: 10px 11px 10px 0px rgba(0,0,0,0.19);

@keyframes slideDown {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
`


const MenuItem = styled.a`
  font-size: 18px;
  margin-bottom: 10px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #79c2d0;
  }
`;

const ToggleIcon = styled.img`
  height: 3em;
  width: 3em;
  cursor: pointer;
  margin-left: 1.25em;
  position: absolute;
`
