import React from 'react'
import Layout from '../components/layout'

function about() {


    return (
        <Layout>
            <div style = {{maxWidth: '1150px', margin: 'auto', marginTop: "10%",
             color: 'rgba(255, 255, 255, .85)', padding: '0 3%', fontFamily: 'roboto'
            }}>
                <h2 style = {{color: 'rgba(200,200,200,.5)',  fontFamily: 'roboto'}}>--WHO WE ARE--</h2>
                <p>
                Blessmas media as a brand is a subset of Blessmas multibiz Ltd which deals in a wide range of business
                e.g consultancy, contract services, purchases and supply, impotr and export services and logistics.

                </p>

                <p>
                    Blessmas media is the photography and media section of the brand. We are into major media aspects like 
                    photography, film making, photo journelism etc.
                </p>

                <p>
                    We started opeartions in 2014 and now we are well known accross the country. We have branches in Ilorin,
                    Ogbomosho, Jebba, Ibadan, Lagos and Abuja. Our strength lies majorly on our integrity and passion to 
                    deliver to our best to our clients.
                </p>

                <p>
                    As a media team, we use the latest technology and latest gadget to remain competitive and relavent
                    in the industry despite the competitive situation of the industry.
                </p>

                <h2  style = {{color: 'rgba(200,200,200,.5)', fontFamily: 'roboto'}}>--WHAT WE DO--</h2>
                <h4 style = {{color: 'purple'}} className = "pl-5">Fashion and models</h4>


            </div>
        </Layout>
    )
}

export default about
