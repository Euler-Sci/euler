import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicroscope, faMagic, faClipboardList } from '@fortawesome/free-solid-svg-icons';

import Layout from '../components/layout';
import SEO from '../components/seo';

import { CardsParent, Cards, Card } from '../global/cards';

const Icon = styled(FontAwesomeIcon)`
margin: 2rem;
color: ${props => props.theme.highlight};
`

const ServicesPage = () => {
  const iconSize = "5x";
  return (
    <Layout>
      <SEO title="Services" />
      <CardsParent>
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

export default ServicesPage
