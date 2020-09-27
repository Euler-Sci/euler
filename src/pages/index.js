import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicroscope, faMagic, faClipboardList } from '@fortawesome/free-solid-svg-icons'

import Layout from "../components/layout"
import SEO from "../components/seo"
import EquationPNG from "../images/equation.png"
import { Highlight } from "../global/elements.js"

/* For services panel */
import { CardsParent, Cards, Card } from '../global/cards'

/********************
 * Hero image stuff *
 ********************/
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
transition: border 0.5s;
border-left: 0rem solid transparent;
border-right: 0rem solid transparent;

&.open {
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
const Button = styled.button`
background-color: ${props => props.theme.gunmetal};
color: ${props => props.theme.primary};
transition: background-color ${props => props.theme.transition1};
&:hover {
  background-color: ${props => props.theme.lilac}
}
`
/******************
 * Equation Board *
 ******************/

const Equation = styled.div`
margin-bottom: 20rem;
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
const EquationArrow = styled(Arrow)`
border-top: 0rem solid ${props => props.theme.gunmetal};
&.open {
  border-top: 8rem solid ${props => props.theme.gunmetal};
}
`
const CardsArrow = styled(Arrow)`
border-top: 0rem solid ${props => props.theme.black};
&.open {
  border-top: 8rem solid ${props => props.theme.black};
}
`

const Icon = styled(FontAwesomeIcon)`
margin: 2rem;
color: ${props => props.theme.highlight};
`

/****************************************************************************/

/**************************
 * Actual Index Component *
 **************************/

const IndexPage = () => {
  const [equationArrowActive, setEquationArrowActive] = useState(false);
  const [cardsArrowActive, setCardsArrowActive] = useState(false);

  const onScroll = (e) => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop;
    const equationActiveOn = 600;
    const cardsActiveOn = 1600;
    if (distanceY >= equationActiveOn)
      setEquationArrowActive(true);
    else
      setEquationArrowActive(false);
    if (distanceY >= cardsActiveOn)
      setCardsArrowActive(true);
    else
      setCardsArrowActive(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  });

  const iconSize = "5x";

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

      <EquationArrow className={equationArrowActive ? 'open' : ''}/>

      <Equation>
        <EquationImg src={EquationPNG} />
        <p>
          This equation, <Highlight>Euler's identity</Highlight>, exhibits the
          elegance and simplicity of the technical solutions that we strive for.
          Of course, real systems with practicality are always products of
          trade-offs, but <Highlight>balance</Highlight>,{' '}
          <Highlight>maintainability</Highlight>,{' '}
          <Highlight>robustness</Highlight>, and <Highlight>cost</Highlight> are
          our lodestars.
        </p>
      </Equation>

      <CardsParent>
        <CardsArrow className={cardsArrowActive ? 'open' : ''}/>
        <Cards>
          <Card>
            <Icon icon={faMicroscope} size={iconSize} />
            <h1>Scientific Computing</h1>
            <ul>
              <li>Image Processing</li>
              <li>Signal Processing</li>
              <li>Speed Optimization</li>
              <li>Instrument Control</li>
              <li>Desktop Applications</li>
            </ul>
          </Card>
          <Card>
            <Icon icon={faMagic} size={iconSize} />
            <h1>Automation</h1>
            <ul>
              <li>CAD/FEA Design</li>
              <li>Actuator & Sensor Selection</li>
              <li>Control System Implementation</li>
              <li>PCBA & Microcontroller Prototyping</li>
              <li>Firmware/Software</li>
            </ul>
          </Card>
          <Card>
            <Icon icon={faClipboardList} size={iconSize} />
            <h1>Consultation</h1>
            <p>
              Available for technical review of an idea, support for drafting a
              proposal or grant, or small projects that require a focused amount
              of development work.
            </p>
          </Card>
        </Cards>
      </CardsParent>
    </Layout>
  )
}

export default IndexPage
