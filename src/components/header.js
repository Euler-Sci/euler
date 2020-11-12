import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import HamburgerMenu from 'react-hamburger-menu';

import { breakpoints } from '../global/breakpoints';
import Logo from '../assets/svg/euler.svg';

const HeaderDiv = styled.nav`
background-color: ${props => props.shrink ? props.theme.darkGunmetal: props.theme.morningBlue + "60"};
padding: ${props => props.shrink ? "1rem" : "1.5rem 0"};
display: flex;
position: fixed;
width: 100%;
justify-content: center;
z-index: 1;
transition: padding ${props => props.theme.transition1} ease-in;
transition: background-color ${props => props.theme.transition1} ease-in;
${breakpoints.vp4} {
  justify-content: space-evenly;
}
`
const Nav = styled.div`
margin: 1rem 0;

${breakpoints.vp7} {
  margin: 0.5rem 0;
}
${breakpoints.vp4} {
  display: none;
  margin: 0;
}
&.active {
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding-top: 30%;
  background-color: black;
  a {
    margin: 3rem auto;
    @media only screen and (max-height: 550px) {
      margin: 2rem auto;
    }
  }
}
`
const Menu = styled(HamburgerMenu)`
margin-top: 0.35rem;

display: none;
visibility: hidden;
cursor: pointer;
z-index: 3;

${breakpoints.vp4}{
  display: inline-block;
  visibility: visible;
}
`
const NavLink = styled(Link)`
text-decoration: none;
color: ${props => props.theme.secondary};
font-family: Mulish;
text-transform: uppercase;
font-size: 0.9rem;
font-weight: bold;
letter-spacing: 3px;
margin: 0 3rem;
transition: color ${props => props.theme.transition1};
&:hover {
  color: ${props => props.theme.highlight};
}
${breakpoints.vp7} {
  margin: 0 1.5rem;
}
`
const LogoStyled = styled(Logo)`
margin-top: 0.5rem;
margin-right: 5rem;
fill: ${props => props.theme.primary};
transition: width ${props => props.theme.transition1} linear;
height: auto;
width: ${props => props.shrink ? "3rem" : "5rem"};
${breakpoints.vp7}{
  width: ${props => props.shrink ? "2rem" : "5rem"};
  margin-right: 3rem;
}
${breakpoints.vp4}{
  width: ${props => props.shrink ? "3rem" : "5rem"};
}
`
const Header = ({ theme }) => {
  const [shrink, setShrink] = useState(false);
  const [open, setOpen] = useState(false)

  const onScroll = (e) => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop;
    const shrinkOn = 50;
    if (distanceY >= shrinkOn)
      setShrink(true);
    else
      setShrink(false);
  }

  const handleClick = () => {
    setOpen(!open);
  }

  useEffect(() => {
    // Turn off scroll when menu open
    let x = document.getElementsByTagName("html")[0];
    let style = "visible";
    if (open)
      style = "hidden";
    document.body.style.overflow = style;
    x.style.overflow = style;
  }, [open])

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll)
  });

  return (
    <HeaderDiv shrink={shrink}>
      <Link to='/'>
        <LogoStyled shrink={shrink}/>
      </Link>
      <Menu
        isOpen={open}
        menuClicked={handleClick}
        strokeWidth={3}
        color='white'
      />
      <Nav className={`${open ? "active" : ""}`}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="#services">Services</NavLink>
        <NavLink to="#about">About</NavLink>
        <NavLink to="#contact">Contact</NavLink>
      </Nav>
    </HeaderDiv>
  )
}

export default Header
