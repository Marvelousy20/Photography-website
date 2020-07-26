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
                    <span>Our offices are opened from Monday through Friday, 9am to 6pm.</span>

                    <form>
                        <input type = 'text' className = 'form-control' placeholder = 'Your Name' />
                        <input type = 'text' className = 'form-control' placeholder = 'Your phone' />
                        <input type = 'text' className = 'form-control' placeholder = 'Your email'/>
                        <textarea className = 'form-control' placeholder = 'Your message' rows = '8' cols = '25' />
                        <input type = 'button' value = "SUBMIT" className = {`btn ${contactStyles.btn} mt-2`} />
                    </form>
                </div>
            </div>
        </ScrollAnimation>    
    )
}

export default contact
