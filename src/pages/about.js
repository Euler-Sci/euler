import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Highlight } from '../global/elements.js';

import { Equation, EquationImg } from '../global/equation';
import EquationPNG from '../images/equation.png';


const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <br /> {/* I don't know why but this is necessary to prevent page breakage */}
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
