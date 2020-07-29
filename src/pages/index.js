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
text-align: center;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
color: white;
`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero>
      <HeroText>/oy·lər/</HeroText>
    </Hero>
  </Layout>
)

export default IndexPage
