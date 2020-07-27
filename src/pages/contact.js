import React from 'react'
import Layout from '../components/layout'
import contactStyles from './pagecss/contact.module.css'

function contact() {
    
    const handleSubmit = (event) => {
        event.preventDefault() ;
    }

    return (
        <Layout>
            <div className = {`${contactStyles.contact}`}>
                <span className = {contactStyles.text}>Contact us</span>
            </div>
            <div className = {`${contactStyles.all}`}>
                <span style = {{fontSize: '2.5rem'}}>
                    We Want To Hear From You
                </span> <br /> <br />
                <span>
                    What's on your mind? Talk to us and someone will get in touch with you 
                    within 12 hours.
                    Please make your suggestions too, if you have any. Thanks.
                </span>
            </div>
            <div style = {{background: '#1a578f', padding: '8%'}}>
                    <form onSubmit = {handleSubmit}>
                        <input type = 'text' className = 'form-control' placeholder = 'Your Name' required/>
                        <input type = 'text' className = 'form-control' placeholder = 'Your phone' required/>
                        <input type = 'text' className = 'form-control' placeholder = 'Your email' required/>
                        <textarea className = 'form-control' placeholder = 'Your message' rows = '8' cols = '25' />
                        <input type = 'submit' value = "SUBMIT" className = {`btn ${contactStyles.btn} mt-2`} 
                            style = {{width: '50%'}}
                        />
                    </form>
                </div>
        </Layout>
    )
}

export default contact
