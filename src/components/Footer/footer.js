import React from 'react'
import { Link } from 'gatsby'

import { FaWhatsapp, FaFacebookF, FaInstagram, FaPhone } from 'react-icons/fa'
import footerstyles from './footer.module.css'
import Logo from '../Images/images/blessmas.png'
import ScrollAnimation from 'react-animate-on-scroll'

function footer() {
    return (
        <ScrollAnimation animateIn = 'fadeIn'>
        <div style = {{background: 'rgba(255, 255, 255, .98)', padding: '50px',
        }} 
            className = {`container-fluid text-primary ${footerstyles.cont}`}>
            <div className = {`row ${footerstyles.rows}`}>
                <div className = {`col-4 ${footerstyles.col}`}>
                    <div style ={{display: 'flex', flexDirection: 'column', 
                    }} className = {`${footerstyles.m}`}>
                        <div className = {`${footerstyles.image} justify-content-center`}>
                            <img src = {Logo} alt = "logo" style = {{width: '60px', height: '60px'}} />                        
                        </div>
                        <Link to = '/' className = 'mb-3'>Home</Link>
                        <Link to = '#about' className = 'mb-3'>About</Link> 
                        <Link to = '/contact' className = 'mb-3'>Contact</Link>
                        <Link to = '/blog' className = 'mb-3'>Blog</Link>
                        <p className = {footerstyles.office}>
                            <span>Office location</span> <br/>
                            <small>Beside Purple hill hotel, fate road, ilorin.</small>
                        </p>
                    </div>
                    <div className = {footerstyles.icons}>
                        <Link to = "#" className = 'mr-3'>
                            <FaWhatsapp style = {{width: '25px',  height: '25px'}} />
                        </Link>

                        <Link to = "https://m.facebook.com/home.php" className = 'mr-3'>
                            <FaFacebookF  style = {{width: '25px',  height: '25px'}}/>
                        </Link>

                        <Link to = "https://www.instagram.com/blessmasmedia/" className = 'mr-3'>
                            <FaInstagram  style = {{width: '25px',  height: '25px'}}/>
                        </Link>

                        <Link to = "tel: 08064531175" className = 'mr-3'>
                            <FaPhone  style = {{width: '25px',  height: '25px'}}/>
                        </Link>
                    </div>   
                </div>

                <div className = {`${footerstyles.d} col-4`}>
                    <div style ={{display: 'flex', flexDirection: 'column', 
                    }} className = {`${footerstyles.m}`}>
                        <span style ={{fontSize:  '1.2rem'}} className = 'mb-3'>Our Services</span> 
                        <span className = 'mb-3'>Documentary</span>
                        <span className = 'mb-3'>Beauty</span>
                        <span className = 'mb-3'>Photo Journalism</span>
                        <span className = 'mb-3'>Modelling</span>
                    </div>
                </div>

                <div className = {`${footerstyles.d} col-4`}>
                    <span style ={{fontSize:  '1.2rem'}}>Office location</span> <br/>
                    <small>Beside Purple hill hotel, fate road, ilorin.</small>
                </div>
            </div>
        </div>
        </ScrollAnimation>
    )
}

export default footer
