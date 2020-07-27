import React from 'react'
import style from './text.module.css'
import { MDBAnimation } from "mdbreact";


function text() {
    return (
        <div style = {{maxWidth: '960px', textAlign: 'center', margin: '0 auto', color: 'rgba(255, 255, 255, .9)', 
            marginTop: '1rem'
        }} className = {style.whole}  id = "home-id">
            <MDBAnimation type = "heartBeat"> 
            <p className = {`${style.cloudText}`}>
                creative
            </p>
             </MDBAnimation>
            <h1 style={{maxWidth: '600px', margin: '0 auto', marginTop: '-3.5rem', 
            fontSize: '3.5vw'}}
                className = {style.mobile}
            >
            Shooting eye-catching moments for fun
            </h1>
            <p style = {{maxWidth: '450px', margin: '0 auto', marginTop: '3%', fontFamily:"Roboto, sans-serif"}} className ={style.homeTitle}>
                <span>We give life to your memory.</span>
                <span>Check out our most popular images.</span>
            </p>
            <button className={`btn ${style.btn}`} style ={{background: '#1a578f', color: '#fff', marginTop: '3%', fontWeight: '600'}}>Discover my work</button>
        </div>
    )
}

export default text
