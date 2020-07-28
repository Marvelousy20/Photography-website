import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './header.module.css'
import { IoMdPhotos, IoIosHome } from 'react-icons/io'
import { FaBlog } from 'react-icons/fa'
import { GiPerson } from 'react-icons/gi'
import { RiContactsLine } from 'react-icons/ri'
import { graphql, useStaticQuery } from 'gatsby'
import { Navbar, Nav } from 'react-bootstrap'

const Header = ({ siteTitle }) => {

  const data =  useStaticQuery(graphql`
      query logo {
        file(relativePath: {eq: "blessmas.png"}) {
          childImageSharp {
            fixed(
              height: 50
              width: 50 
            ) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
  `)

  const Myul = (props) => (
    <Link to = {props.to} className = {`${styles.links}`}>{props.children}</Link> 
  )

  return (
    <Navbar collapseOnSelect expand="md" bg="black" variant="dark" sticky = "top" className ={styles.containerFluid}
    >
      <Link to = '/' className = {styles.a}>
        <span style = {{color: '#fff'}}>Blessmas</span> <span style = {{color: 'green'}}>Media</span>
      </Link>
        {/* <Img fixed = {data.file.childImageSharp.fixed} /> */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav"  className = {styles.shows}/>
      <Navbar.Collapse id="responsive-navbar-nav" className = {styles.show} >
        <Nav className="mr-auto">
        </Nav>
        <Nav>
          <Myul to = '/'><IoIosHome /> Home</Myul>
          <Myul to = '/work'><IoMdPhotos /> Work</Myul>
          <Myul to = '/about'><GiPerson /> About</Myul>
          <Myul to = '/blog'><FaBlog /> Blog</Myul>
          <Myul to = '/contact'><RiContactsLine /> Contact</Myul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>     
  )
} 



export default Header
