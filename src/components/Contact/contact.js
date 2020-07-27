import React from 'react'
import contactStyles from './contact.module.css'
import ScrollAnimation from 'react-animate-on-scroll'

function contact() {

    return (
        <ScrollAnimation animateIn = 'fadeIn'>
            <div style = {{ background: '#1a578f', padding: '4%'}} className = {`mt-5 ${contactStyles.body}`}>
                <div style = {{textAlign: 'center',}}>
                    <span style = {{fontSize: '1.6rem'}}>Love what you see?</span> <br/>
                    <span style = {{fontSize: '1.2rem'}}>Contact us today!</span> <br/>
                </div>
                <div className = {`${contactStyles.cont} mt-4`}>
                    <span>Our offices are opened 24 hours / 7 days.</span>

                    <form>
                        <input type = 'text' className = 'form-control' placeholder = 'Your Name' required/>
                        <input type = 'text' className = 'form-control' placeholder = 'Your phone' required/>
                        <input type = 'text' className = 'form-control' placeholder = 'Your email' required/>
                        <textarea className = 'form-control' placeholder = 'Your message' rows = '8' cols = '25' />
                        <input type = 'submit' value = "SUBMIT" className = {`btn ${contactStyles.btn} mt-2`}/>
                    </form>
                </div>
            </div>
        </ScrollAnimation>    
    )
}

export default contact
