import React from 'react'
import contactStyles from './contact.module.css'
import ScrollAnimation from 'react-animate-on-scroll'
import Axios from 'axios'

function Contact() {
    const [state, setState] =  React.useState({
        getstatus: ''
    }) ;
    
    const handleSubmit = (e) => {
        e.preventDefault() ;
        const form = e.target ;
        const data = new FormData(form) ;

        Axios.post(form.action, data).then(response => {
            if(response.status === 200) {
                setState({getstatus: "SUCCESS"})
                form.reset() ;
                alert('Thank you, we will get in touch shotly.')
                console.log(state.getstatus)
            }
        }).catch(error => {
            setState({getstatus: 'ERROR'})
            alert(error)
        })
    }    

    const {getstatus} = state.getstatus ; 
    return (
        <ScrollAnimation animateIn = 'fadeIn'>
            <div style = {{ background: '#1a578f', padding: '4%'}} className = {`mt-5 ${contactStyles.body}`}
                id = "some-id"
            >
                <div style = {{textAlign: 'center',}}>
                    <span style = {{fontSize: '1.6rem'}}>Love what you see?</span> <br/>
                    <span style = {{fontSize: '1.2rem'}}>Contact us today!</span> <br/>
                </div>
                <div className = {`${contactStyles.cont} mt-4`}>
                    <span>Our offices are opened 24 hours / 7 days.</span>
                    <form 
                        action = "https://formspree.io/mrgyrwja"
                        method = "POST"
                        onSubmit = {handleSubmit}
                    >
                        <input type = 'text' name = 'name' className = 'form-control' placeholder = 'Your Name' required />
                        <input type = 'text' name = 'phone number' className = 'form-control' placeholder = 'Your phone' required/>
                        <input type = 'text' name = 'email' className = 'form-control' placeholder = 'Your email' required/>
                        <textarea className = 'form-control' name = 'message' placeholder = 'Your message' rows = '8' cols = '25' />
                        {getstatus === 'SUCCESS' ? <p>Submitted</p> : 
                            <input type = 'submit' value = "SUBMIT" className = {`btn ${contactStyles.btn} mt-2`}/>
                        }
                        {getstatus === 'ERROR' && <p>oops, there was an error</p>}
                    </form>
                </div>
            </div>
        </ScrollAnimation>    
    )
}

export default Contact
