import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "styled-components"

const Hero = styled.div`
background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/euler_hero.png");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position: relative;

height: 1080px;
`
const HeroText = styled.div`
position: absolute;
top: 35%;
left: 25%;
transform: translate(-50%, -50%);
color: ${props => props.theme.primary};
width: 30rem;
h1, h2, h3 {
  font-family: Mulish;
}
p {
  font-family: Mulish;
  color: ${props => props.theme.secondary}
}
`
const Highlight = styled.span`
color: ${props => props.theme.highlight};
font-weight: bold;
`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <HeroText>
        <h1>
          Dedicated to beauty and elegance in code.
        </h1>
        <p>
          Euler ( <Highlight>/oy·lər/</Highlight> ) is a conglomerate of expert engineers who can help you with any problem.
        </p>
      </HeroText>
    </Hero>
  </Layout>
)

export default IndexPage
