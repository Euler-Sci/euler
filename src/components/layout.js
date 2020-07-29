/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import "./layout.css"
import Hero from "../images/euler_hero.png"

const Header = styled.nav`
background-color: rgba(130, 167, 166, 0.5);
padding: 1rem;
display: flex;
position: absolute;
width: 100%;
a {
  text-decoration: none;
  color: white;
  font-family: Mulish;
  text-transform: uppercase;
  font-size: 1.6rem;
}
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header>
        <Link to="/">Home</Link>
      </Header>
      <img src={Hero} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
