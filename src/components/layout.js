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

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          maxWidth: `100%`,
          marginTop: `50px`,
        }}
      >
        <hr />
        <main style = {{marginTop: '1rem'}}>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
