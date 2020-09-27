import styled from 'styled-components';

export const Highlight = styled.span`
color: ${props => props.theme.highlight};
font-weight: bold;
`
export const Arrow = styled.div`
width: 0;
height: 0;
margin: 0 auto;
transition: border 0.5s;
border-left: 0rem solid transparent;
border-right: 0rem solid transparent;

&.open {
  border-left: 10rem solid transparent;
  border-right: 10rem solid transparent;
}
`
