import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
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
import logoBlack from '../../assets/logoBlack.svg'

const Header = () => {
	const [menu, setMenu] = useState(false);
  let {location: { pathname }} = useHistory();
	return (
  <HeaderContainer theme={pathname}>
      <Link to="/">
        {pathname === "/" ? (  
          <Img src={logoImg} alt="Yosef Blandin logo of the page" />
        ) : (  
          <Img src={logoBlack} alt="Yosef Blandin logo of the page" />
        )}
      </Link>
			<MenuButton theme={pathname} onClick={() => setMenu(!menu)}>
      <Item1 />
      <Item2 />
      <Item3 />
    </MenuButton>
    <Ul menu={menu}>
      <Link to="/">
        <Li>Home</Li>
      </Link>
      <Link to="/projects">
        <Li>Projects</Li>
      </Link>
      <Link to="/about">
        <Li>About</Li>
      </Link>
    </Ul>
  </HeaderContainer>
	);
}
export default Header;
