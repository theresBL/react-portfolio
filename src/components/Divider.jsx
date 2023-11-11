import wave from '../assets/icons/divider.svg'
import styled from 'styled-components'

export const Divider = () => {
  return (
    <Wave src={wave} alt='divider' />
  )
}

const Wave = styled.img`
width: 100%;
`