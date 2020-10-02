import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCogs,
  faClipboardList,
  faCodeBranch,
  faChartBar,
  faMicrochip,
  faRobot
} from '@fortawesome/free-solid-svg-icons';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { CardsParent, Cards, Card } from '../global/cards';

const Icon = styled(FontAwesomeIcon)`
margin: 2rem;
color: ${props => props.theme.highlight};
`
const BR = styled.br`
margin: 2rem;
`

const ServicesPage = () => {
  const iconSize = "5x";
  return (
    <Layout>
      <SEO title="Services" />
      <CardsParent>
        <BR />
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
          <Card>
            <Icon icon={faChartBar} size={iconSize} />
            <h1>Statistics and Probability</h1>
            <ul>
              <li>Statistical Analysis</li>
              <li>Design of Experiments</li>
              <li>Data Visualization</li>
              <li>Regression</li>
            </ul>
          </Card>
          <Card>
            <Icon icon={faClipboardList} size={iconSize} />
            <h1>Writing and Review</h1>
            <ul>
              <li>Product Development Process Documentation</li>
              <li>Expert Witness</li>
              <li>Proposal and Grant Writing</li>
              <li>Patent Writing and Review</li>
              <li>Software Code Review</li>
            </ul>
          </Card>
          <Card>
            <Icon icon={faRobot} size={iconSize} />
            <h1>Automation & Robotics</h1>
            <ul>
              <li>Actuator & Sensor Selection</li>
              <li>Mechanism Design and Analysis</li>
              <li>Custom Hardware (e.g., CPU, radios, MEMS sensors, mixed signal, etc.)</li>
            </ul>
          </Card>
        </Cards>
      </CardsParent>
    </Layout>
  )
}

export default ServicesPage
