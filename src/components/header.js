import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Logo from "../assets/svg/euler.svg"

const HeaderDiv = styled.nav`
background-color: ${props => props.theme.morningBlue}60;
padding: 1.5rem 0;
display: flex;
position: fixed;
width: 100%;
justify-content: center;
z-index: 100;
transition: padding ${props => props.theme.transition1} ease-in;

a {
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
}
`
const LogoStyled = styled(Logo)`
margin-right: 5rem;
fill: white;
transition: width ${props => props.theme.transition1} linear;
height: auto;
`
const Header = () => {
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
  const shrunkStyle={ padding: "0" }
  const style = shrink ? shrunkStyle : {};
  const logoSize = shrink ? "3rem" : "5rem";

  return (
    <HeaderDiv style={style}>
      <LogoStyled style={{ width: logoSize }}/>
      <Link to="/">Home</Link>
      <Link to="/">Services</Link>
      <Link to="/">About</Link>
      <Link to="/">Contact</Link>
    </HeaderDiv>
  )
}

export default Header
