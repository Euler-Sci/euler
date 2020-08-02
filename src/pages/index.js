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
h1, h2, h3 {
    width: 30rem;
    font-family: Mulish;
}
p {
    width: 40rem;
    font-family: Mulish;
    font-size: 1.2rem;
    color: ${props => props.theme.secondary};
    padding-bottom: 1rem;
}
`
const Highlight = styled.span`
color: ${props => props.theme.highlight};
font-weight: bold;
`
const Button = styled.button`
background-color: ${props => props.theme.gunmetal};
color: ${props => props.theme.primary};
&:hover {
    background-color: ${props => props.theme.lilac}
}
`
const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Hero>
            <HeroText>
                <h1>
                    The elegance of mathematics in your code infrastructure.
                </h1>
                <p>
                    Euler ( <Highlight>/oy·lər/</Highlight> ) is a constellation
                    of expert engineers dedicated to bringing the beauty and
                    elegance of <Highlight>Leonhard Euler</Highlight> to your
                    code.
                </p>
                <Button>
                    Hire Euler now.
                </Button>
            </HeroText>
        </Hero>
    </Layout>
)

export default IndexPage

