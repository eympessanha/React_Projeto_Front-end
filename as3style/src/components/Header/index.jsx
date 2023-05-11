import React, { memo, useState } from 'react'
import logo from '../../assets/images/logo.png'
import menu from '../../assets/images/menu.svg'
import {
  HeaderStyled,
  LogoStyled,
  MenuContentStyled,
  MenuIconStyled,
  MenuStyled,
} from './style'

function Header() {
  const [show, setShow] = useState(false)

  const toggleMenu = () => {
    setShow(!show)
  }
  
  return (
    <HeaderStyled>
      <LogoStyled>
        <a href="#">
          <img src={logo} alt="Logo As3" width="36px" />
        </a>
      </LogoStyled>

      <MenuContentStyled>
        <MenuIconStyled onClick={toggleMenu} src={menu} width="24px" />
      </MenuContentStyled>

      <MenuStyled show={show}>
        <li>
          <a href="#Loguin">Loguin</a>
        </li>
        <li>
          <a href="#novo usuario">Cadastre-se</a>
        </li>
        <li>
          <a href="#suporte">Ajuda</a>
        </li>
        <li>
          <a href="#news">Notícias</a>
        </li>
      </MenuStyled>
    </HeaderStyled>
  )
}

export default memo(Header)