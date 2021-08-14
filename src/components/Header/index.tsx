import React, { useState } from 'react'
import {
  HeaderContainer,
  Img,
  Link,
  Ul,
  Li,
  MenuButton,
  Item1,
  Item2,
  Item3,
} from './styles';
import logoImg from '../../assets/logo.svg'

const Header: React.FC = () => {
	const [menu, setMenu] = useState<boolean>(false);
	return (
  <HeaderContainer>
      <Link to="/">
          <Img src={logoImg} alt="Yosef Blandin logo of the page" />
      </Link>
			<MenuButton onClick={() => setMenu(!menu)}>
      <Item1 />
      <Item2 />
      <Item3 />
    </MenuButton>
    <Ul menu={menu}>
      <Link to="/">
        <Li>Home</Li>
      </Link>
      <Link to="/about">
        <Li>About</Li>
      </Link>
    </Ul>
  </HeaderContainer>
	);
}
export default Header;
