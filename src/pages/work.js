import React from 'react'
import Layout from '../components/layout'
import Image from '../components/Images/images'
import SEO from "../components/seo"


function work() {
    return (
        <Layout>
            <SEO title = "Blessmas media photography - Photo gallery" description = 
                "Here are some of selected images shot by Blessmas media photogrpahy"
            />
                <Image />
        </Layout>
    )
}

export default work
