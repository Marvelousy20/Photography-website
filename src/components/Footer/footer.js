import React from 'react'
import { Link } from 'gatsby'

import { FaWhatsapp, FaFacebookF, FaInstagram, FaPhone } from 'react-icons/fa'
import footerstyles from './footer.module.css'
import Logo from '../Images/images/blessmas.png'
// import ScrollAnimation from 'react-animate-on-scroll'
import Header from '../Header/header'
import * as Scroll from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll'
import { TiArrowUpThick } from 'react-icons/ti'
import scrollTo from 'gatsby-plugin-smoothscroll'
import { AiOutlineCopyright } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'


function footer() {


    const scrollToTop = () => {
        scroll.scrollToTop() ;
    }

    return (
        <div style = {{padding: '30px 5%',}} 
            className = {`container-fluid text-primary ${footerstyles.cont}`} id = 'header'>
            <div className = {`${footerstyles.image} justify-content-center`}>
                <img src = {Logo} alt = "logo" style = {{width: '60px', height: '60px'}} alt = "logo" />                        
            </div>
            <div className = {`d-flex ${footerstyles.display}`}>
                <div>
                    <span style = {{color: 'green'}}>Office location</span> <br/>
                    <span style = {{ color: '#fff'}}>Beside Purple hill hotel, fate road, ilorin, kwara state.</span> <br />
                    <small className = {`${footerstyles.copywrite}`}><AiOutlineCopyright /> 2020, Blessmas multibiz Ltd. All Rights Reserved. </small>
                </div>
                <div className = "m-auto"></div>
                <div className = {`${footerstyles.connect}`} style = {{color: 'green'}}>
                    <div>Connect with us on our social medias</div>
                    <div className = 'mt-1'>
                        <Link to = "https://wa.me/+2348064531175" className = 'mr-3' target="_blank" >
                            <FaWhatsapp style = {{width: '25px',  height: '25px', color: '#fff'}} />
                        </Link>

                        <Link to = "https://m.facebook.com/home.php" className = 'mr-3' target="_blank">
                            <FaFacebookF  style = {{width: '25px',  height: '25px', color: '#fff'}}/>
                        </Link>

                        <Link to = "https://www.instagram.com/blessmasmedia/" className = 'mr-3' target="_blank" >
                            <FaInstagram  style = {{width: '25px',  height: '25px', color: '#fff'}}/>
                        </Link>
                        <a href = "tel:+2349064531175" className = 'mr-3' target="_blank">
                            <FaPhone  style = {{width: '25px',  height: '25px', color: '#fff'}} />
                        </a>
                          <a href = "mailto:Blessmas4life@gmail.com" className = 'mr-3' target="_blank" >
                            <MdEmail  style = {{width: '25px',  height: '25px', color: '#fff'}}/>
                        </a>
                    </div> 
                </div>   
                <small className = {`${footerstyles.copy} d-none`}><AiOutlineCopyright /> 2020, Blessmas multibiz Ltd. All Rights Reserved. </small>
            </div>
            <TiArrowUpThick onClick = {scrollToTop} style = {{float: 'right', width: '30px',
                height: '30px', color: 'rgb(200,200,200)'
            }} className = {`${footerstyles.arrow}`} />
        </div>
    )
}

export default footer
