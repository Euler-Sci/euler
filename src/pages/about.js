import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Highlight } from '../global/elements';
import { breakpoints } from '../global/breakpoints'

import { Equation, EquationImg } from '../global/equation';
import EquationPNG from '../images/equation.png';

const About = styled.p`
width: 800px;
margin: 10rem auto;
font-size: 2rem;
line-height: 2.3rem;
${breakpoints.vp7} {
  width: 600px;
  margin: 5rem auto;
}
${breakpoints.vp4} {
  font-size: 1.5rem;
  width: 85%;
  line-height: 1.7rem;
}
`
const BR = styled.br`
${breakpoints.vp7} {
  margin: 2rem;
}
`

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <BR /> {/* I don't know why but this is necessary to prevent page breakage */}
      <About>
        <Highlight>Euler Scientific</Highlight> is a partnership of software,
        electrical, optics, and
        mechanical engineers, and numerous other senior engineering
        professionals.  We possess expertise in a number of disciplines,
        including mechanical and electrical design, high performance computing,
        power electronics, statistics, and both firmware and software.  We aim
        to offer the highest possible quality of engineering services,
        characterized by innovation, practicality, open and clear communication,
        and integrity.
      </About>
      <About>
        Our namesake, <Highlight>Leonhard Euler</Highlight>, whose picture
        graces our landing page, was
        one of the most prolific mathematicians of all time. His{' '}
        <Highlight>insight</Highlight>{' '}
        and <Highlight>creativity</Highlight> inspires us daily.
      </About>
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
    </Layout>
  )
}

export default AboutPage
