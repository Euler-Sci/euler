import React, { useEffect, useState } from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Equation from "../images/equation.png"


const Hero = styled.div`
background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/euler_hero.png");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position: relative;

height: 1080px;

border-bottom: 1rem solid ${props => props.theme.gunmetal};
`
const Arrow = styled.div`
width: 0;
height: 0;
margin: 0 auto;
border-left: 0rem solid transparent;
border-right: 0rem solid transparent;
border-top: 0rem solid ${props => props.theme.gunmetal};

transition: border 0.5s;
&.open {
  border-top: 8rem solid ${props => props.theme.gunmetal};
  border-left: 10rem solid transparent;
  border-right: 10rem solid transparent;
}
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
}
`
const Highlight = styled.span`
color: ${props => props.theme.highlight};
font-weight: bold;
`
const Button = styled.button`
background-color: ${props => props.theme.gunmetal};
color: ${props => props.theme.primary};
transition: background-color ${props => props.theme.transition1};
&:hover {
  background-color: ${props => props.theme.lilac}
}
`

const Story = styled.div`
height: 50rem;
p {
  width: 800px;
  margin: 0 auto;
  font-size: 2rem;
}
`
const EquationImg = styled.img`
display: block;
margin: 10rem auto;
width: 500px;
`
const IndexPage = () => {
  const [arrowActive, setArrowActive] = useState(false);

  const onScroll = (e) => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop;
    const activeOn = 400;
    if (distanceY >= activeOn)
      setArrowActive(true);
    else
      setArrowActive(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  });

  return (
    <Layout>
      <SEO title="Home" />
      <Hero>
        <HeroText>
          <h1>
            The elegance of mathematics solving your problems.
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

      <Arrow className={arrowActive ? 'open' : ''}/>

      <Story>
        <EquationImg src={Equation} />
        <p>
          This equation, <Highlight>Euler's identity</Highlight>, exhibits the
          elegance and simplicity of the technical solutions that we strive for.
          Of course, real systems with practicality are always products of
          trade-offs, but <Highlight>balance</Highlight>,{' '}
          <Highlight>maintainability</Highlight>,{' '}
          <Highlight>robustness</Highlight>, and <Highlight>cost</Highlight> are
          our lodestars.
        </p>
      </Story>
    </Layout>
  )
}

export default IndexPage
