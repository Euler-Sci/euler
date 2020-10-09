import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Arrow, Highlight } from '../global/elements.js';

/* For services panel */
import { CardsParent, Cards, Card } from '../global/cards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faCogs, faMicrochip } from '@fortawesome/free-solid-svg-icons';

/* for about panel */
import EquationPNG from '../images/equation.png';
import { Equation, EquationImg } from '../global/equation';

import { numbers, breakpoints } from '../global/breakpoints'

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

${breakpoints.vp10} {
  background-size: 140%;
  height: 768px;
}
${breakpoints.vp7} {
  background-size: 160%;
  height: 690px;
}
${breakpoints.vp4} {
  background-size: 250%;
  background-position: right -200px bottom 0;
}
${breakpoints.vp3} {
  background-size: 300%;
  background-position: right -200px bottom 0;
  height: 500px;
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

${breakpoints.vp12} {
  left: 40%;
}
${breakpoints.vp10} {
  top: 45%;
}
${breakpoints.vp7} {
  h1, h2, h3 {
    width: 25rem;
    font-size: 2.3rem;
  }
  p {
    width: 30rem;
  }
}
${breakpoints.vp4} {
  left: 42%;
  top: 60%;
  h1, h2, h3 {
    width: 15rem;
    font-size: 2rem;
  }
  p {
    font-size: 1.5rem;
    width: 20rem;
  }
}
${breakpoints.vp3} {
  h1, h2, h3 {
    font-size: 1.5rem;
  }
  p {
    width: 15rem;
    font-size: 1rem;
  }
}
`
const HireLink = styled(Link)`
margin: 1rem;
padding: 15px 32px;
display: inline-block;
cursor: pointer;

font-size: 1.4rem;
font-family: Roboto;
text-decoration: none;

background-color: ${props => props.theme.gunmetal};
color: ${props => props.theme.primary};
transition: background-color ${props => props.theme.transition1};
&:hover {
    background-color: ${props => props.theme.lilac};
}
${breakpoints.vp3} {
  font-size: 1rem;
}
`
const HeroPanel = () => {
  return (
    <Hero>
      <HeroText>
        <h1>The elegance of mathematics solving your problems.</h1>
        <p>
            Euler ( <Highlight>/oy·lər/</Highlight> ) is a constellation
            of expert engineers dedicated to bringing the beauty and
            elegance of <Highlight>Leonhard Euler</Highlight> to your
            code.
        </p>
        <HireLink to='/contact' >Hire Euler now.</HireLink>
      </HeroText>
    </Hero>
  )
}

/******************
* Equation Panel *
******************/
const EquationArrow = styled(Arrow)`
border-top: 0rem solid ${props => props.theme.gunmetal};
&.open {
  border-top: 8rem solid ${props => props.theme.gunmetal};
}
`
const EquationPanel = () => {
  return (
    <Equation>
      <EquationImg src={EquationPNG} />
      <p>
        This equation, <Highlight>Euler's identity</Highlight>, exhibits
        the elegance and simplicity of the technical solutions that we
        strive for.
      </p>
      <br />
      <br />
      <p>
        Of course, real systems with practicality are always products of
        trade-offs, but <Highlight>balance</Highlight>,{' '}
        <Highlight>maintainability</Highlight>,{' '}
        <Highlight>robustness</Highlight>, and{' '}
        <Highlight>cost</Highlight> are our lodestars.
      </p>
    </Equation>
  )
}

/***************
* Cards Panel *
***************/

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
const CardsPanel = ({ active }) => {
  const iconSize = "5x";
  return (
    <CardsParent>
      <CardsArrow className={active ? 'open' : ''}/>
      <Cards>
        <Card>
          <Icon icon={faCodeBranch} size={iconSize} />
          <h1>Software</h1>
          <ul>
            <li>Signal & Image Processing</li>
            <li>Machine Learning</li>
            <li>Speed Optimization</li>
            <li>Instrument Control</li>
            <li>Desktop & Web Applications</li>
          </ul>
        </Card>
        <Card>
          <Icon icon={faCogs} size={iconSize} />
          <h1>Mechanical Engineering</h1>
          <ul>
            <li>Computer Aided Design (CAD)</li>
            <li>Finite Element Analysis (FEA)</li>
            <li>Computational Fluid Dynamics (CFD)</li>
            <li>Control System Implementation</li>
            <li>Geometric Dimensioning & Tolerancing (GD&T)</li>
          </ul>
        </Card>
        <Card>
          <Icon icon={faMicrochip} size={iconSize} />
          <h1>Electrical Engineering</h1>
          <ul>
            <li>PCBA Schematic, Layout, Analysis & Prototyping</li>
            <li>Microcontroller Selection</li>
            <li>Instrumentation Setup</li>
            <li>Communication Subsystems (e.g., USB, SATA, TCP/IP)</li>
          </ul>
        </Card>
      </Cards>
    </CardsParent>
  )
}

/****************************************************************************/

/**************************
* Actual Index Component *
**************************/

const IndexPage = () => {
  const [equationArrowActive, setEquationArrowActive] = useState(false);
  const [cardsArrowActive, setCardsArrowActive] = useState(false);
  const [dimensions, setDimensions] = useState([1920, 1080])

  const onScroll = (e) => {
    /* Sets the height from top at which to unfold the triangles, readjusts
     * height when screen is skinnier */
    const distanceY = window.pageYOffset || document.documentElement.scrollTop;

    let equationActiveOn = 600;
    if (dimensions[0] <= numbers.vp10)
      equationActiveOn = 300;

    let cardsActiveOn = 1600;
    if (dimensions[0] <= numbers.vp10)
      cardsActiveOn = 1100;
    else if (dimensions[0] <= numbers.vp7)
      cardsActiveOn = 400;

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

  useEffect(() => {
    // Set the dimensions for changing scroll height
    window.addEventListener('resize', () => {
      setDimensions([window.innerWidth, window.innerHeight])
   })
  },[])

  return (
    <Layout>
      <SEO title="Home" />

      <HeroPanel />

      <EquationArrow className={equationArrowActive ? 'open' : ''} />
      <EquationPanel />

      <CardsPanel active={cardsArrowActive} />

    </Layout>
  )
}

export default IndexPage
