import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { breakpoints } from '../global/breakpoints'

const FooterParent = styled.footer`
background-color: ${props => props.theme.darkGunmetal};
`

const StyledFooter = styled.div`
width: 75%;
margin: 0 auto;
display: flex;
justify-content: space-around;
padding: 1rem;
${breakpoints.vp12}{
  width: 90%;
}
${breakpoints.vp4} {
  flex-wrap: wrap;
}
`
const Card = styled.div`
width: 15rem;
h4 {
  font-size: 1.5rem;
}
p {
  font-size: 1rem;
}
a {
  color: white;
}
${breakpoints.vp10} {
  width: 10rem;
}
${breakpoints.vp4} {
  width: 15rem;
  text-align: center;
  margin: 1rem;
}
`

const Footer = () => {
  return (
    <FooterParent>
      <StyledFooter>
        <Card>
          <h4>About</h4>
          <p>
            Euler is a partnership of engineers with expertise in almost
            everything.
          </p>
        </Card>
        <Card style={{ textAlign: "center" }}>
          <p>
            © {new Date().getFullYear()} Euler<br/>
            <Link to='/terms'>Terms & Conditions</Link>
          </p>
        </Card>
        <Card>
          <h4>Contact</h4>
          <p>
            Euler Sci, Inc.<br/>
            <a href="tel:+17603832086">(760) 383-2086</a><br/>
            <a href="mailto:info@euler-sci.com">info@euler-sci.com</a>
          </p>
        </Card>
      </StyledFooter>
    </FooterParent>
  )
}

export default Footer
