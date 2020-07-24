import React from 'react'
import { Link } from 'gatsby'

import { FaWhatsapp, FaFacebookF, FaInstagram, FaPhone } from 'react-icons/fa'
import footerstyles from './footer.module.css'
import Logo from '../Images/images/blessmas.png'

function footer() {
    return (
        <div style = {{background: 'rgba(255, 255, 255, .98)', padding: '50px',
            marginTop: "8%",}} 
            className = {`container-fluid text-primary ${footerstyles.cont}`}>
            <div className = {`row justify-content-center ${footerstyles.rows}`}>
                <div className = {`col-4 ${footerstyles.col} justify-content-center`}>
                    <div style ={{display: 'flex', flexDirection: 'column', 
                    }} className = {`${footerstyles.m}`}>
                        <Link to = '/' className = 'mb-3'>Home</Link>
                        <Link to = '/about' className = 'mb-3'>About</Link> 
                        <Link to = '/contact' className = 'mb-3'>Contact</Link>
                        <Link to = '/blog' className = 'mb-3'>Blog</Link>
                        <p className = {footerstyles.office}>
                            <span>Office location</span> <br/>
                            <small>Beside Purple hill hotel, fate road, ilorin.</small>
                        </p>
                    </div>
                    <div className = {footerstyles.icons}>
                        <Link to = "/" className = 'mr-3'>
                            <FaWhatsapp style = {{width: '25px',  height: '25px'}} />
                        </Link>

                        <Link to = "/" className = 'mr-3'>
                            <FaFacebookF  style = {{width: '25px',  height: '25px'}}/>
                        </Link>

                        <Link to = "/" className = 'mr-3'>
                            <FaInstagram  style = {{width: '25px',  height: '25px'}}/>
                        </Link>

                        <Link to = "tel: 08064531175" className = 'mr-3'>
                            <FaPhone  style = {{width: '25px',  height: '25px'}}/>
                        </Link>
                    </div>   
                </div>

                <div className = {`${footerstyles.d} col-4`}>
                    <div style ={{display: 'flex', flexDirection: 'column', 
                    }} className = {`${footerstyles.m} justify-content-center`}>
                        <span style ={{fontSize:  '1.2rem'}} className = 'mb-3'>Our Services</span> 
                        <span className = 'mb-3'>Documentary</span>
                        <span className = 'mb-3'>Beauty</span>
                        <span className = 'mb-3'>Photo Journalism</span>
                        <span className = 'mb-3'>Modelling</span>
                    </div>
                </div>

                <div className = {`${footerstyles.d} col-4 justify-content-center`}>
                    <span style ={{fontSize:  '1.2rem'}}>Office location</span> <br/>
                    <small>Beside Purple hill hotel, fate road, ilorin.</small>
                    <img src = {Logo} alt = "logo" style = {{color: 'red', width: '150px', height: '150px'}}/>
                </div>
            </div>
        </div>
    )
}

export default footer
