import React from 'react'
import styles from './image.module.css'
import mystyles from './image.scss'
import ImageGallery from 'react-image-gallery';
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import ScrollAnimation from 'react-animate-on-scroll'


const Images = () =>  {

  const data = useStaticQuery(graphql`
    query Images {
      optimized: allFile(filter: {relativeDirectory: {eq: "optimized"}}) {
        nodes {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }

            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }  
      }
      thumbnails: allFile(filter: {relativeDirectory: {eq: "thumbnails"}}) {
        nodes {
          id 
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    } 
  `)
    
  console.log(data)
  

  const images = [
    {
      original: `${data.optimized.nodes[14].childImageSharp.fluid.src}`,
      thumbnail: `${data.thumbnails.nodes[0].childImageSharp.fixed.src}`,
      description: 'Photo Journalism',
    },
    {
      original: `${data.optimized.nodes[13].childImageSharp.fluid.src}`,
      thumbnail: `${data.thumbnails.nodes[4].childImageSharp.fixed.src}`,
      description: 'Documentary',
    },
    {
      original: `${data.optimized.nodes[1].childImageSharp.fluid.src}`,
      thumbnail: `${data.thumbnails.nodes[10].childImageSharp.fixed.src}`,
      description: 'Documentary',
    },
    {
      original: `${data.optimized.nodes[11].childImageSharp.fluid.src}`,
      thumbnail: `${data.thumbnails.nodes[14].childImageSharp.fixed.src}`,
      description: 'Documentary',
    }, 
    {
      original: `${data.optimized.nodes[5].childImageSharp.fluid.src}`,
      thumbnail: `${data.thumbnails.nodes[8].childImageSharp.fixed.src}`,
      description: 'Photo Journalism',
    }, 
    {
      original: `${data.optimized.nodes[6].childImageSharp.fluid.src}`,
      thumbnail: `${data.thumbnails.nodes[2].childImageSharp.fixed.src}`,
      description: 'Model',
    }, 
    {
      original: `${data.optimized.nodes[7].childImageSharp.fluid.src}`,
      thumbnail: `${data.thumbnails.nodes[5].childImageSharp.fixed.src}`,
      description: 'Beauty',
    }, 
    {
      original: `${data.optimized.nodes[8].childImageSharp.fluid.src}`,
      thumbnail: `${data.thumbnails.nodes[13].childImageSharp.fixed.src}`,
      description: 'Beauty',
    },
    {
      original: `${data.optimized.nodes[9].childImageSharp.fluid.src}`,
      thumbnail: `${data.thumbnails.nodes[12].childImageSharp.fixed.src}`,
      description: 'Model',
    },
    {
      original: `${data.optimized.nodes[10].childImageSharp.fluid.src}`,
      thumbnail: `${data.thumbnails.nodes[3].childImageSharp.fixed.src}`,
      description: 'Photo Journalism',
    },
    {
      original: `${data.optimized.nodes[0].childImageSharp.fluid.src}`,
      thumbnail: `${data.thumbnails.nodes[7].childImageSharp.fixed.src}`,
      description: 'Creative',
    },
    {
      original: `${data.optimized.nodes[12].childImageSharp.fluid.src}`,
      thumbnail: `${data.thumbnails.nodes[11].childImageSharp.fixed.src}`,
      description: 'Nature',
    },
    {
      original: `${data.optimized.nodes[3].childImageSharp.fluid.src}`,
      thumbnail: `${data.thumbnails.nodes[9].childImageSharp.fixed.src}`,
      description: 'Model',
    },
    {
      original: `${data.optimized.nodes[2].childImageSharp.fluid.src}`,
      thumbnail: `${data.thumbnails.nodes[1].childImageSharp.fixed.src}`,
      description: 'Documentary',
    },
    {
      original: `${data.optimized.nodes[4].childImageSharp.fluid.src}`,
      thumbnail: `${data.thumbnails.nodes[6].childImageSharp.fixed.src}`,
      description: 'Model',
    },
  ];      

  return (
    <div id = "scroll-div">
      <div style = {{padding: '2rem 15%'}}>
        <span style = {{fontSize: '2rem', marginRight: '8px',}}>
        Selected</span>
        <span style = {{color: 'green', fontSize: '2rem'}}>Projects</span>
        <ScrollAnimation animateIn = "fadeIn">
          <p className = 'mt-3'>Here are a few selected images</p>
        </ScrollAnimation>
      </div>
      <ScrollAnimation animateIn = "fadeIn">
        <ImageGallery items = {images} style = {{color: 'red'}} /> 
      </ScrollAnimation>  
    </div>
  )
}

export default Images
