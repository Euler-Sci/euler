import styled from 'styled-components'

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
padding: 1rem;
padding-top: 5rem;

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
`
export { CardsParent, Cards, Card }
