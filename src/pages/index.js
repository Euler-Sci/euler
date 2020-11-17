import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Arrow, Highlight } from '../global/elements.js';

/* For services panel */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faMicrochip, faCode, faWaveSquare, faSquareRootAlt } from '@fortawesome/free-solid-svg-icons';

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
${breakpoints.vp3_2} {
  p {
    width: 15rem;
    font-size: 1rem;
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
${breakpoints.vp3_2} {
  font-size: 1.2rem;
}
${breakpoints.vp3} {
  font-size: 1rem;
}
`
const HeroPanel = () => {
  return (
    <Hero id="top">
      <HeroText>
        <h1>The elegance of mathematics solving your problems.</h1>
        <p>
            Euler ( <Highlight>/oy·lər/</Highlight> ) is a constellation
            of expert engineers dedicated to bringing the beauty and
            elegance of <Highlight>Leonhard Euler</Highlight> to your
            code.
        </p>
        <HireLink to='#contact'>Hire Euler now.</HireLink>
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
const CardsArrow = styled(Arrow)`
border-top: 8rem solid ${props => props.theme.gunmetal};
&.open {
  border-top: 8rem solid ${props => props.theme.gunmetal};
}
`
const ServiceHeader = styled.h1`
width: 50%;
margin: 3rem auto;
${breakpoints.vp7} {
  width: 80%;
  font-size: 2rem;
}
`
const Cards = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
padding: 1rem;
padding-top: 0;
padding-bottom: 5rem;
${breakpoints.vp7} {
  padding-bottom: 2rem;
}
${breakpoints.vp4} {
  padding: 0;
  margin: 0 auto;
}
`
const Card = styled.div`
width: 25rem;
margin: 2rem;
padding: 6rem 1rem;
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

${breakpoints.vp10} {
  padding: 4rem 0.75rem;
}
${breakpoints.vp7} {
  width: 30rem;
  padding: 2rem 0.5rem 0 1rem;
  h1 {
    font-size: 2rem;
  }
  ul, p {
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.3rem;
  }
}
${breakpoints.vp4} {
  width: 20rem;
  margin: 1rem 0;
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
  width: 17rem;
}
`
const Skills = styled.ul`
margin: 0 auto 5rem auto;
font-size: 2rem;
width: fit-content;
columns: 2;
li {
  line-height: 3rem;
  margin: 0 5rem;
}
${breakpoints.vp4} {
  columns: 1;
  text-align: center;
  li {
    font-size: 1.8rem;
    line-height: 2.5rem;
  }
}
`
const Icon = styled(FontAwesomeIcon)`
margin: 2rem;
color: ${props => props.theme.highlight};
`
const CardsPanel = ({ active, id }) => {
  const iconSize = "5x";
  return (
    <CardsParent id={id}>
      <CardsArrow className={active ? 'open' : ''}/>
      <ServiceHeader>
        Euler provides contracting and consulting services for the development
        of scientific software. Our expertise includes the following:
      </ServiceHeader>
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
          <Icon icon={faMicrochip} size={iconSize} />
          <h1>High Performance Computing</h1>
          <ul>
            <li>Speed Optimization</li>
            <li>Parallel Processing</li>
            <li>Supercomputing</li>
          </ul>
        </Card>
        <Card>
          <Icon icon={faWaveSquare} size={iconSize} />
          <h1>Signal Processing</h1>
          <ul>
            <li>Image Processing</li>
            <li>Radar & Optical Processing</li>
            <li>Speach & Acoustic Processing</li>
          </ul>
        </Card>
        <Card>
          <Icon icon={faCode} size={iconSize} />
          <h1>Software Development</h1>
          <ul>
            <li>Desktop Applications</li>
            <li>Web Applications</li>
            <li>Instrument Control</li>
          </ul>
        </Card>
        <Card>
          <Icon icon={faSquareRootAlt} size={iconSize} />
          <h1>Data Science</h1>
          <ul>
            <li>Statistical Analysis</li>
            <li>Data Visualization</li>
            <li>Data Gathering/Web Scraping</li>
          </ul>
        </Card>
      </Cards>
      <ServiceHeader>We have significant experience in the following tools and platforms:</ServiceHeader>
      <Skills>
        <li>C/C++</li>
        <li>MATLAB</li>
        <li>Python</li>
        <li>C#</li>
        <li>AVX</li>
        <li>TensorFlow</li>
        <li>ROOT</li>
        <li>LarCV</li>
        <li>CUDA</li>
        <li>OpenCL</li>
        <li>Windows</li>
        <li>Linux</li>
      </Skills>
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
${breakpoints.vp7} {
  p {
    width: 600px;
  }
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
const EquationPanel = ({active, id}) => {
  return (
    <Equation id={id}>
      <EquationArrow className={active ? 'open' : ''}/>
      <p>
        <Highlight>Euler</Highlight> is a partnership of software, electrical,
        optics, and mechanical engineers, and numerous other senior engineering
        professionals.  We possess expertise in a number of disciplines,
        including mechanical and electrical design, high performance computing,
        power electronics, statistics, and both firmware and software.  We aim
        to offer the highest possible quality of engineering services,
        characterized by innovation, practicality, open and clear communication,
        and integrity.
      </p>
      <p>
        Our namesake,{' '}<Highlight>Leonhard Euler</Highlight>, whose picture
        graces our landing page, was one of the most prolific mathematicians of
        all time. His{' '}<Highlight>insight</Highlight>{' '}
        and{' '}<Highlight>creativity</Highlight>{' '}inspires us daily.
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

/**********************
 * Contact form stuff *
 **********************/
const ContactArrow = styled(Arrow)`
border-top: 8rem solid ${props => props.theme.gunmetal};
&.open {
  border-top: 8rem solid ${props => props.theme.gunmetal};
}
`

const Form = styled.form`
margin: 5rem auto;
display: flex;
justify-content: center;
flex-wrap: wrap;
width: 60rem;
${breakpoints.vp7} {
  width: 100%;
}
`
const Top = styled.div`
display: flex;
width: fit-content;
justify-content: center;
flex-wrap: wrap;
margin: 0 auto;
`
const Input = styled.input`
font-family: Roboto;
font-size: 1.3rem;

background-color: ${props => props.theme.darkGunmetal};
color: ${props => props.theme.peach};

border: 2px solid ${props => props.theme.gunmetal};
border-radius: 4px;
box-sizing: border-box;

height: 2rem;
width: 14rem;
margin: 1rem;
padding: 1rem 1rem;

&:focus {
  border: 2px solid ${props => props.theme.lilac};
}
`
const TextArea = styled.textarea`
background-color: ${props => props.theme.darkGunmetal};
border: 2px solid ${props => props.theme.gunmetal};
color: ${props => props.theme.peach};
font-family: Mulish;
font-size: 1.3rem;
box-sizing: border-box;
padding: 12px 20px;
border-radius: 4px;
width: 70rem;
height: 40rem;
${breakpoints.vp10} {
  width: 60rem;
  height: 30rem;
}
${breakpoints.vp7} {
  width: 45rem;
  height: 25rem;
}
${breakpoints.vp4} {
  width: 90%;
  height: 20rem;
}
`
const Button = styled.button`
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

const Contact = ({ active, id, dimensions }) => {
  return (
    <div id={id}>
      <ContactArrow className={active ? 'open' : ''}/>
      <Form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
        <Top>
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <label>
            Name
            <Input type="text" name="name" id="name" />
          </label>
          <label>
            Email
            <Input type="email" name="email" id="email" />
          </label>
          <label>
            Subject
            <Input type="text" name="subject" id="subject" />
          </label>
        </Top>
        <TextArea
          name="message"
          id="message"
          placeholder="Type your message here..."
        />
        <Button type="submit">Send</Button>
      </Form>
    </div>
  )
}

/****************************************************************************/

/**************************
* Actual Index Component *
**************************/

const IndexPage = () => {
  const [equationArrowActive, setEquationArrowActive] = useState(false);
  const [cardsArrowActive, setCardsArrowActive] = useState(false);
  const [contactArrowActive, setContactArrowActive] = useState(false);
  const [dimensions, setDimensions] = useState([1920, 1080])

  const onScroll = (e) => {
    /* Sets the height from top at which to unfold the triangles, readjusts
     * height when screen is skinnier */
    const distanceY = window.pageYOffset || document.documentElement.scrollTop;

    /* mobile optimize these */
    let cardsActiveOn = 700;
    if (dimensions[0] <= numbers.vp10)
      cardsActiveOn = 400;
    if (dimensions[0] <= numbers.vp3)
      cardsActiveOn = 300;

    let equationActiveOn = 2950;
    if (dimensions[0] <= numbers.vp12)
      equationActiveOn = 3850;
    if (dimensions[0] <= numbers.vp10)
      equationActiveOn = 3450;
    if (dimensions[0] <= numbers.vp10)
      equationActiveOn = 3700;
    if (dimensions[0] <= numbers.vp7 && dimensions[1] >= 1024)
      equationActiveOn = 3400;
    if (dimensions[0] <= numbers.vp3)
      equationActiveOn = 4250;

    let contactActiveOn = 4600;
    if (dimensions[0] <= numbers.vp12)
      contactActiveOn = 5300;
    if (dimensions[0] <= numbers.vp10)
      contactActiveOn = 4700;
    if (dimensions[0] <= numbers.vp7)
      contactActiveOn = 5200;
    if (dimensions[0] <= numbers.vp7 && dimensions[1] >= 1024)
      contactActiveOn = 4950;
    if (dimensions[0] <= numbers.vp3_2)
      contactActiveOn = 5850;
    if (dimensions[0] <= numbers.vp3)
      contactActiveOn = 6100;

    /* don't change these */
    if (distanceY >= cardsActiveOn)
      setCardsArrowActive(true);
    else
      setCardsArrowActive(false);

    if (distanceY >= equationActiveOn)
      setEquationArrowActive(true);
    else
      setEquationArrowActive(false);

    if (distanceY >= contactActiveOn)
      setContactArrowActive(true);
    else
      setContactArrowActive(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll)
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

      <EquationPanel id="about" active={equationArrowActive} />

      <Contact id="contact" dimensions={dimensions} active={contactArrowActive}/>

    </Layout>
  )
}

export default IndexPage
