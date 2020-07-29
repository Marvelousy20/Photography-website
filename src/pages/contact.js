import React from 'react'
import Layout from '../components/layout'
import contactStyles from './pagecss/contact.module.css'
import Axios from 'axios'

function Contact() {
        const [state, setState] =  React.useState({
        status: ''
    }) ;
        
    const submitForm = (e) => {
        e.preventDefault() ;
        const form = e.target ;
        const data = new FormData(form) ;

        Axios.post(form.action, data).then(response => {
            if(response.status === 200) {
                setState({getstatus: "SUCCESS"})
                alert('Thank you, we will get in touch shotly.')
                form.reset() ;
                console.log(state.status)
            }
        }).catch(error => {
            setState({status: 'ERROR'})
            alert(error)
            console.log(state.status)
        })
    }    

       

    const {status} = state.status ; 
    
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
                    <form
                        method = 'POST'
                        action = "https://formspree.io/mrgyrwja"
                        onSubmit = {submitForm}
                    >
                        <input type = 'text' className = 'form-control' placeholder = 'Your Name' required/>
                        <input type = 'text' className = 'form-control' placeholder = 'Your phone' required/>
                        <input type = 'text' className = 'form-control' placeholder = 'Your email' required/>
                        <textarea className = 'form-control' placeholder = 'Your message' rows = '8' cols = '25' />
                        {status === "SUCCESS" ? <p>submitted</p> :  <input type = 'submit' value = "SUBMIT" className = {`btn ${contactStyles.btn} mt-2`} 
                            style = {{width: '50%'}}
                        />}
                        {status === "ERROR" && <p>Ooops! There was an error.</p>}
                    </form>
                </div>
        </Layout>
    )
}

export default Contact