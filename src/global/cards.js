import styled from 'styled-components';

import { breakpoints } from './breakpoints';

const CardsParent = styled.div`
background-color: ${props => props.theme.gunmetal};
`
const Cards = styled.div`
display: flex;
justify-content: center;
padding: 1rem;
padding-top: 0;
padding-bottom: 5rem;
`
const Card = styled.div`
width: 25rem;
margin: 2rem;
padding: 5rem 1rem 0 1rem;

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
  padding: 5rem 0.5rem 0 1rem;
  margin: 0.25rem;
  h1 {
    font-size: 2rem;
  }
  ul, p {
    font-size: 1rem;
    line-height: 1rem;
    li {
    }
  }
}
`
export { CardsParent, Cards, Card }
