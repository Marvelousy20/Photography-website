import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Text from "../components/Texts/text"
import ImagesComponent from '../components/Images/images'
import Aboutus from '../components/About/aboutus'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Text />
    <ImagesComponent />
    <Aboutus />
  </Layout>
)

export default IndexPage
