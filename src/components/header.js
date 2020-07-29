import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Logo from "../assets/svg/euler.svg"

const HeaderDiv = styled.nav`
background-color: rgba(130, 167, 166, 0.5);
padding: 1rem;
display: flex;
position: absolute;
width: 100%;
justify-content: center;

a {
  text-decoration: none;
  color: white;
  font-family: Mulish;
  text-transform: uppercase;
  font-size: 0.7rem;
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
