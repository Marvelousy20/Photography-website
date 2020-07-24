import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './header.module.css'
import { IoIosMenu, IoMdPhotos } from 'react-icons/io'
import { FaBlog } from 'react-icons/fa'
import { GiPerson } from 'react-icons/gi'
import { MdContactMail } from 'react-icons/md'
import { RiContactsLine } from 'react-icons/ri'
// import Image from '../../images/logo.svg'
// import logos from '../Images/images/blessmas2.png'

import { Navbar, Nav, NavDropdown,  } from 'react-bootstrap'


const Header = ({ siteTitle }) => {

  const Myul = (props) => (
    <Link to = {props.to} className = {`${styles.links}`}>{props.children}</Link> 
  )

  return (
    <Navbar collapseOnSelect expand="md" bg="black" variant="dark" sticky = "top" className ={styles.containerFluid}>
      <Navbar.Brand href="#home">
          <div className = {styles.logo}></div>
      </Navbar.Brand> 
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
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
