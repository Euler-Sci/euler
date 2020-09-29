import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Logo from '../assets/svg/euler.svg';

const HeaderDiv = styled.nav`
background-color: ${props => props.shrink ? props.theme.darkGunmetal: props.theme.morningBlue + "60"};
padding: ${props => props.shrink ? 0 : "1.5rem 0"};
display: flex;
position: fixed;
width: 100%;
justify-content: center;
z-index: 100;
transition: padding ${props => props.theme.transition1} ease-in;
transition: background-color ${props => props.theme.transition1} ease-in;
`
const NavLink = styled(Link)`
text-decoration: none;
color: ${props => props.theme.secondary};
font-family: Mulish;
text-transform: uppercase;
font-size: 0.9rem;
font-weight: bold;
letter-spacing: 3px;
margin: 1rem 3rem;
transition: color ${props => props.theme.transition1};
&:hover {
  color: ${props => props.theme.highlight};
}
`
const LogoStyled = styled(Logo)`
margin-top: 0.5rem;
margin-right: 5rem;
fill: white;
transition: width ${props => props.theme.transition1} linear;
height: auto;
width: ${props => props.shrink ? "3rem" : "5rem"}
`

const Header = ({ theme }) => {
  const [shrink, setShrink] = useState(false);

  const onScroll = (e) => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop;
    const shrinkOn = 50;
    if (distanceY >= shrinkOn)
      setShrink(true);
    else
      setShrink(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  });

  return (
    <HeaderDiv shrink={shrink}>
      <Link to='/'>
      <LogoStyled shrink={shrink}/>
      </Link>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </HeaderDiv>
  )
}

export default Header
