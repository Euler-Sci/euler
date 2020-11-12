import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Arrow, Highlight } from '../global/elements.js';

/* For services panel */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faCogs, faMicrochip } from '@fortawesome/free-solid-svg-icons';

/* for about panel */
import EquationPNG from '../images/equation.png';

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
/***************
* Cards Panel *
***************/

const CardsParent = styled.div`
background-color: ${props => props.theme.black};
`
const Cards = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
padding: 1rem;
padding-top: 0;
padding-bottom: 5rem;
${breakpoints.vp4} {
  flex-direction: column;
  padding: 0;
  margin: 0 auto;
}
`
const Card = styled.div`
width: 25rem;
margin: 2rem;
padding: 4rem 1rem;
background-color: ${props => props.theme.gunmetal};

text-align: center;
h1 {
  margin-bottom: 3rem;
  color: ${props => props.theme.secondary};
}
p {
  line-height: 2rem;
}
ul, p {
  text-align: left;
  font-size: 1.5rem;
  li {
    margin: 2rem;
  }
}
${breakpoints.vp7} {
  width: 20rem;
  padding: 2rem 0.5rem 0 1rem;
  h1 {
    font-size: 2rem;
  }
  ul, p {
    font-size: 1.2rem;
    line-height: 1.3rem;
  }
}
${breakpoints.vp4} {
  width: 20rem;
  margin: 0;
  h1 {
    font-size: 2rem;
  }
  ul, p {
    text-align: center;
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
}
${breakpoints.vp3} {
  margin: 0 auto;
  width: 17rem;
}
`
const CardsArrow = styled(Arrow)`
border-top: 8rem solid ${props => props.theme.gunmetal};
&.open {
  border-top: 8rem solid ${props => props.theme.gunmetal};
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
          <h1>Modeling and Simulation</h1>
          <ul>
            <li>Physics-based modeling</li>
            <li>Machine/Deep Learning</li>
            <li>Quantum Simulation</li>
          </ul>
        </Card>
        <Card>
          <Icon icon={faCogs} size={iconSize} />
          <h1>High Performance Computing</h1>
          <ul>
            <li>Speed Optimization</li>
            <li>Parallel Processing</li>
            <li>Supercomputing</li>
          </ul>
        </Card>
        <Card>
          <Icon icon={faMicrochip} size={iconSize} />
          <h1>Signal Processing</h1>
          <ul>
            <li>Image Processing</li>
            <li>Radar & Optical Processing</li>
            <li>Speach & Acoustic Processing</li>
          </ul>
        </Card>
        <Card>
          <Icon icon={faMicrochip} size={iconSize} />
          <h1>Software Development</h1>
          <ul>
            <li>Desktop Applications</li>
            <li>Web Applications</li>
            <li>Instrument Control</li>
          </ul>
        </Card>
        <Card>
          <Icon icon={faMicrochip} size={iconSize} />
          <h1>Data Science</h1>
          <ul>
            <li>Statistical Analysis</li>
            <li>Data Visualization</li>
            <li>Data Gathering/Web Scraping</li>
          </ul>
        </Card>
      </Cards>
    </CardsParent>
  )
}

/******************
* Equation Panel *
******************/
const EquationArrow = styled(Arrow)`
border-top: 8rem solid ${props => props.theme.black};
&.open {
  border-top: 8rem solid ${props => props.theme.black};
}
`

export const Equation = styled.div`
background-color: ${props => props.theme.gunmetal};
padding-bottom: 7rem;
p:first-of-type {
  margin-top: 5rem;
}
p {
  width: 800px;
  margin: 3rem auto 0.5rem auto;
  font-size: 2rem;
}
${breakpoints.vp10} {
  margin-bottom: 10rem;
}
${breakpoints.vp7} {
  p {
    width: 600px;
  }
  margin-bottom: 5rem;
}
${breakpoints.vp4} {
  p {
    font-size: 1.5rem;
    width: 85%;
    line-height: 1.7rem;
  }
}
`
export const EquationImg = styled.img`
display: block;
margin: 10rem auto;
width: 500px;
${breakpoints.vp10} {
  margin: 5rem auto;
}
${breakpoints.vp4} {
  width: 250px;
}
`
const EquationPanel = ({active}) => {
  return (
    <Equation>
      <EquationArrow className={active ? 'open' : ''}/>
      <p>
        <Highlight>Euler Scientific</Highlight> is a partnership of software,
        electrical, optics, and
        mechanical engineers, and numerous other senior engineering
        professionals.  We possess expertise in a number of disciplines,
        including mechanical and electrical design, high performance computing,
        power electronics, statistics, and both firmware and software.  We aim
        to offer the highest possible quality of engineering services,
        characterized by innovation, practicality, open and clear communication,
        and integrity.
      </p>
      <p>
        Our namesake, <Highlight>Leonhard Euler</Highlight>, whose picture
        graces our landing page, was
        one of the most prolific mathematicians of all time. His{' '}
        <Highlight>insight</Highlight>{' '}
        and <Highlight>creativity</Highlight> inspires us daily.
      </p>
      <EquationImg src={EquationPNG} />
      <p>
        This equation, <Highlight>Euler's identity</Highlight>, exhibits
        the elegance and simplicity of the technical solutions that we
        strive for.
      </p>
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

    let equationActiveOn = 2200;
    if (dimensions[0] <= numbers.vp10)
      equationActiveOn = 300;

    let cardsActiveOn = 400;
    if (dimensions[0] <= numbers.vp10)
      cardsActiveOn = 300;
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

      <CardsPanel id="services" active={cardsArrowActive} />

      <EquationPanel active={equationArrowActive} />

    </Layout>
  )
}

export default IndexPage
