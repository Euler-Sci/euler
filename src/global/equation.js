import styled from 'styled-components';

import { breakpoints } from './breakpoints'

export const Equation = styled.div`
margin-bottom: 20rem;
p {
  width: 800px;
  margin: 0 auto;
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
