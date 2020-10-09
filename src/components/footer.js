import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const FooterParent = styled.footer`

`

const StyledFooter = styled.div`
width: 75%;
margin: 0 auto;
display: flex;
justify-content: space-around;
padding: 1rem;
`
const Card = styled.div`
width: 20rem;
line-height: 1.7rem;
h4 {
  font-size: 1.5rem;
}
a {
  color: white;
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
