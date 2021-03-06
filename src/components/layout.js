/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header/header"
import "./layout.css"
import Footer from './Footer/footer'
import { Element } from 'react-scroll'




const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          maxWidth: `100%`,
          // marginTop: `20px`,
        }}
      >
        <main>{children}</main>
      </div>
      <Element id='example-destination' name='example-destination'>
        <Footer id = 'some-id' />
      </Element>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
