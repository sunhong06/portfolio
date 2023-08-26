import React from 'react';
import { Link } from 'react-scroll';
import { styled } from 'styled-components';

const TitleName = styled.h1`
  font-family: 'Pacifico', cursive;
  font-size: 1.5rem;
  padding-left: 20px;
  cursor: pointer;
`;
const HeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  padding-right: 20px;
`;
const Herder = styled.header`
  background-color: #fff;
  position: fiexd;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  li {
    margin: 15px;
    cursor: pointer;
    font-size: 1rem;
  }
`;

const Header: React.FC = () => {
  return (
    <Herder>
      <TitleName>KimSunHong</TitleName>
      <HeaderMenu>
        <li>
          <Link to='1' spy={true} smooth={true}>
            &#60;About &#47;&#62;
          </Link>
        </li>
        <li>
          <Link to='2' spy={true} smooth={true}>
            &#60;Skills &#47;&#62;
          </Link>
        </li>
        <li>
          <Link to='3' spy={true} smooth={true}>
            &#60;Projects &#47;&#62;
          </Link>
        </li>
        <li>
          <Link to='4' spy={true} smooth={true}>
            &#60;Contact &#47;&#62;
          </Link>
        </li>
      </HeaderMenu>
    </Herder>
  );
};

export default Header;
