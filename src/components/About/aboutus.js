import React from 'react'
import styles from './aboutus.module.css'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Carousel } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll'


function Aboutus() {
      
    const data = useStaticQuery(graphql`
        query blessmas {
            image1: imageSharp(fixed: {originalName: {eq: "d.jpg"}}) {
                fixed{
                    ...GatsbyImageSharpFixed
                }
            }
            image2: imageSharp(fixed: {originalName: {eq: "d.jpg"}}) {
                fixed{
                    ...GatsbyImageSharpFixed
                }
            }
        }
    `)   
      
    return (
        <ScrollAnimation animateIn = "fadeIn">
            <div style = {{textAlign: 'center',}} className = {`mt-5 ${styles.cont}`}>
                <span style = {{fontSize: '2rem', marginRight: '8px'}}>Photo</span>  <span style = {{color: 'green',fontSize: '2rem'}}>Proofing</span>
                <p className = 'mt-3'>We allow our clients to choose which photos suit them most.</p>

                <Carousel>
                    <Carousel.Item>
                        <Img fixed = {data.image1.fixed} /> 
                    </Carousel.Item>
                    <Carousel.Item>
                        <Img fixed = {data.image2.fixed} /> 
                    </Carousel.Item>
                </Carousel>
            </div>
        </ScrollAnimation>
    )
}

export default Aboutus
