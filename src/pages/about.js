import React from 'react'
import Layout from '../components/layout'
import styles from './pagecss/about.module.css'
import { useStaticQuery, graphql } from 'gatsby' 
import BackgroundImage from 'gatsby-background-image'
import { Link } from 'gatsby'
import SEO from "../components/seo"


function About() {    
    const data = useStaticQuery(graphql`
        query MyQuery {
            image: file(relativePath: {eq: "camera.jpg"}) {
                childImageSharp {
                    fixed(quality: 90, width: 1920, height: 1000) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)
    const imageData = data.image.childImageSharp.fixed
    return (
        <Layout>
            <SEO title = "Blessmas media photography - About us" description = "We shoot portraits, documentaries, models and fashions. Our main office is located in ilorin"/>
            <div className = {styles.head}>
                {/* <Img fluid = {data.image1.fluid} style ={{backgroundColor: 'yellow'}}/> */}
                <BackgroundImage
                    Tag = "section"
                    fluid = {imageData}
                    backgroundColor= 'purple'
                    className = {styles.back}
                    style = {{width: '100%', backgroundPosition: 'center', 
                        backgroundRepeat: 'repeat-y', backgroundSize: 'cover',
                        color: 'white', 
                        textAlign: 'center',
                        padding: '50px',
                        marginBottom: '7%'
                    }}
                >
                    <span className = {styles.about}>About us</span>
                </BackgroundImage>
                <div style = {{color: 'rgba(200,200,200,.5)',  fontSize: '1.4rem'}} className = 'mb-2'>--WHO WE ARE--</div>
                <p>
                Blessmas media as a brand is a subset of Blessmas multibiz Ltd which deals in a wide range of business
                e.g consultancy, contract services, purchases and supply, import and export services and logistics.
                </p>

                <p>
                    Blessmas media is the photography and media section of the brand. We are into major media aspects like 
                    photography, film making, photo journalism etc.
                </p>

                <p>
                    We started opeartions in 2014 and now we are well known accross the country. We have branches in Ilorin,
                    Ogbomosho, Jebba, Ibadan, Lagos and Abuja. Our strength lies majorly on our integrity and passion to 
                    deliver our best to our clients.
                </p>

                <p>
                    As a media team, we use the latest technology and latest gadget to remain competitive and relavent
                    in the industry despite the competitive situation of the industry.
                </p>

                <div style = {{color: 'rgba(200,200,200,.5)',  fontSize: '1.4rem'}} className = 'mb-2'>--WHAT WE DO--</div>
                    
                <div style = {{fontWeight: '600'}}>Event photography</div> 
                <span>We shoot weddings, birthdays and any other events</span> <br /> <br />

                <div style = {{fontWeight: '600'}}>Fashion and Beauty</div>
                <span>We shoot fashion and beauty pictures</span>  <br /> <br />

                <div style = {{fontWeight: '600'}}>Model</div>
                <span>We shoot models</span>  <br /> <br />

                <div style = {{fontWeight: '600'}}>documentary</div>
                <span>We travel around the world to document historical events or locations</span>  <br /> <br />

                <div style = {{fontWeight: '600'}}>Photo Journalism</div>
                <span>We tell stories with our images, as our images is our voice.</span> <br /> <br />
                <div style = {{color: 'rgba(200,200,200,.5)', fontSize: '1.4rem'}}>--OUR WORKING HOURS--</div>
                <span>We are avalilable 24/7 and you can get in touch via all channels available 
                    on our <Link to = '/contact'>contact page.</Link>
                </span> <br /><br/>

                <div style = {{color: 'rgba(200,200,200,.5)', fontSize: '1.4rem'}}>--OUR CHARGE--</div>
                <span>We are affordable and we assure the best of quality to our clients.</span> <br/><br/>

                <div style = {{color: 'rgba(200,200,200,.5)', fontSize: '1.4rem'}}>--OUR CULTURE--</div>
                <span>Our staff are well cultured in addressing customers, supply customers demand, meet our
                    turn around time and all other requests and we assure our customers of the best they ever
                    can get anywhere, anytime.
                </span> <br/><br/>

                <div style = {{color: 'rgba(200,200,200,.5)', fontSize: '1.4rem'}}>--OUR MISSION--</div>
                <span>
                    To promote photo journalism and enhance the development of African culture through the 
                    stories we tell with our images.
                </span> <br/><br/>

                    
                <div style = {{color: 'rgba(200,200,200,.5)', fontSize: '1.4rem'}}>--OUR MOTTO</div>
                <span>
                    Giving life to your memories.
                </span> <br/><br/>
            </div>
        </Layout>
    )
}

export default About
