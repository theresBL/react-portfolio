import { useState } from 'react'
import { bubble as Menu } from 'react-burger-menu'

export const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleBurgerState = (state) => {
    setMenuOpen(state.isOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  // const toggleMenu = () => {
  //   setMenuOpen((prevMenuOpen) => !prevMenuOpen)
  // }

  const styles = {
    bmBurgerButton: {
      position: 'absolute',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px',
      cursor: 'pointer'
    },
    bmCrossButton: {
      position: 'absolute',
      left: '36px',
      top: '36px'
    },
    bmCross: {
      background: '#333'
    },
    bmMenuWrap: {
      position: 'absolute',
      top: '0',
      left: '0',
      height: '100%',
      width: '25%'
    },
    bmMenu: {
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    bmMorphShape: {
      fill: 'rgba(255, 255, 255, 0.939)'
    },
    bmItemList: {
      color: '#333',
      padding: '0.8em',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly'
    },
  }


  return (
    <Menu noOverlay customBurgerIcon={<img src='src/assets/icons/menu.svg' />} styles={styles} isOpen={menuOpen} onStateChange={(state) => handleBurgerState(state)}>
      <a onClick={() => closeMenu()}>About me</a>
      <a>Projects</a>
      <a>CV</a>
      <a>Contact</a>
    </Menu>
  )
}