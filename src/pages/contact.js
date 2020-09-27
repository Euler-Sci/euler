import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Form = styled.form`
margin: 10rem auto;
display: flex;
justify-content: center;
flex-wrap: wrap;
width: 60rem;
`
const Input = styled.input`
border-radius: 0;
border: 0;
margin: 1rem;
height: 2rem;
font-family: Roboto;
`

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <br /> {/* necessary for not interacting with header */}

      <Form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <label>
          Name
          <Input type="text" name="name" id="name" />
        </label>
        <label>
          Email
          <Input type="email" name="email" id="email" />
        </label>
        <label>
          Subject
          <Input type="text" name="subject" id="subject" />
        </label>
        <textarea
          name="message"
          id="message"
          rows="20"
          cols="70"
          placeholder="Type your message here..."
          style={{ fontFamily: "Mulish", fontSize: "1.3rem" }}
        />
        <button type="submit">Send</button>
      </Form>
    </Layout>
        )
        }

        export default ContactPage
