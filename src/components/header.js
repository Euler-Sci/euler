import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Logo from "../assets/svg/euler.svg"

const HeaderDiv = styled.nav`
/* The last 2 digits in background-color are transparency */
background-color: ${props => props.theme.morningBlue}60;
padding: 1.5rem 0;
display: flex;
position: absolute;
width: 100%;
justify-content: center;
z-index: 100;

a {
  text-decoration: none;
  color: ${props => props.theme.primary};
  font-family: Mulish;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: 3px;
  margin: 1rem 3rem;
}
`

const Header = () => {
  console.log(Logo);
  return (
    <HeaderDiv>
      <Logo style={{fill: "white", width: "5rem", height: "auto"}}/>
      <Link to="/">Home</Link>
      <Link to="/">Services</Link>
      <Link to="/">About</Link>
      <Link to="/">Contact</Link>
    </HeaderDiv>
  )
}

export default Header
