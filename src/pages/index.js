import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Text from "../components/Texts/text"
import ImagesComponent from '../components/Images/images'
import Aboutus from '../components/About/aboutus'
import Contact from '../components/Contact/contact'


const IndexPage = () => (
  <Layout>
    <SEO title="Blessmas media photography - Taking the best pictures for your events" description = "Photography is a art. Blessmas media photography takes the best pictures
      using the latest cameras. We shoot documentaries,
      fashion and model photography and event photography. Our images speak for us." />
    <Text />
    <ImagesComponent />
    <Aboutus />
    <Contact />
  </Layout>
)

export default IndexPage
