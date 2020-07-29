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
      b: imageSharp(fluid: {originalName: {eq: "a.jpg"}}) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
      c: imageSharp(fixed: {originalName: {eq: "c.jpg"}}) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }

      d: imageSharp(fluid: {originalName: {eq: "d.jpg"}}) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }

      e: imageSharp(fluid: {originalName: {eq: "e.jpg"}}) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }

      f: imageSharp(fluid: {originalName: {eq: "f.jpg"}}) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }

      g: imageSharp(fluid: {originalName: {eq: "g.jpg"}}) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }

      h: imageSharp(fluid: {originalName: {eq: "h.jpg"}}) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }

      i: imageSharp(fluid: {originalName: {eq: "i.jpg"}}) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }

      j: imageSharp(fluid: {originalName: {eq: "j.jpg"}}) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }

      k: imageSharp(fluid: {originalName: {eq: "k.jpg"}}) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }

      l: imageSharp(fluid: {originalName: {eq: "l.jpg"}}) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }

      m: imageSharp(fluid: {originalName: {eq: "m.jpg"}}) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }

      n: imageSharp(fluid: {originalName: {eq: "n.JPG"}}) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }

      o: imageSharp(fluid: {originalName: {eq: "o.jpg"}}) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }

      p: imageSharp(fluid: {originalName: {eq: "p.JPG"}}) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }

      a2: imageSharp(fixed: {originalName: {eq: "a_tn.jpg"}}) {
        fixed(
          width: 100
        ){
          ...GatsbyImageSharpFixed
        }
      }

      c2: imageSharp(fixed: {originalName: {eq: "c_tn.jpg"}}) {
        fixed(
          width: 100
        ) { 
          ...GatsbyImageSharpFixed
        }
      }

      d2: imageSharp(fixed: {originalName: {eq: "d_tn.jpg"}}) {
        fixed(
          width: 100
        ){ 
          ...GatsbyImageSharpFixed
        }
      }

      e2: imageSharp(fixed: {originalName: {eq: "e_tn.jpg"}}) {
        fixed(
          width: 100
        ){ 
          ...GatsbyImageSharpFixed
        }
      }

      f2: imageSharp(fixed: {originalName: {eq: "f_tn.jpg"}}) {
        fixed(
          width: 100
        ){ 
          ...GatsbyImageSharpFixed
        }
      }

      g2: imageSharp(fixed: {originalName: {eq: "g_tn.jpg"}}) {
        fixed(
          width: 100
        ){ 
          ...GatsbyImageSharpFixed
        }
      }

      h2: imageSharp(fixed: {originalName: {eq: "h_tn.jpg"}}) {
        fixed(
          width: 100
        ){ 
          ...GatsbyImageSharpFixed
        }
      }

      i2: imageSharp(fixed: {originalName: {eq: "i_tn.jpg"}}) {
        fixed(
          width: 100
        ){ 
          ...GatsbyImageSharpFixed
        }
      }

      j2: imageSharp(fixed: {originalName: {eq: "j_tn.jpg"}}) {
        fixed(
          width: 100
        ){ 
          ...GatsbyImageSharpFixed
        }
      }

      k2: imageSharp(fixed: {originalName: {eq: "k_tn.jpg"}}) {
        fixed(
          width: 100
        ){ 
          ...GatsbyImageSharpFixed
        }
      }

      l2: imageSharp(fixed: {originalName: {eq: "l_tn.jpg"}}) {
        fixed(
          width: 100
        ){ 
          ...GatsbyImageSharpFixed
        }
      }

      m2: imageSharp(fixed: {originalName: {eq: "m_tn.jpg"}}) {
        fixed(
          width: 100
        ){ 
          ...GatsbyImageSharpFixed
        }
      }

      n2: imageSharp(fixed: {originalName: {eq: "n_tn.jpg"}}) {
        fixed(
          width: 100
        ){ 
          ...GatsbyImageSharpFixed
        }
      }

      l2: imageSharp(fixed: {originalName: {eq: "l_tn.jpg"}}) {
        fixed(
          width: 100
        ){ 
          ...GatsbyImageSharpFixed
        }
      }

      o2: imageSharp(fixed: {originalName: {eq: "o_tn.jpg"}}) {
        fixed(
          width: 100
        ){ 
          ...GatsbyImageSharpFixed
        }
      }

      p2: imageSharp(fixed: {originalName: {eq: "p.jpg"}}) {
        fixed(
          width: 100
        ){ 
          ...GatsbyImageSharpFixed
        }
      }
    }
  `)   

    
  // console.log(data)
  
    const images = [
      {
        original: `${data.a.fluid.src}`,
        thumbnail: `${data.a2.fixed.src}`,
        description: 'Photo Journalism'
      },
      {
        original: `${data.c.fluid.src}`,
        thumbnail: `${data.c2.fixed.src}`,
        description: 'Photo Journalism'
      },
      {
        original: `${data.d.fluid.src}`,
        thumbnail: `${data.d2.fixed.src}`,
        description: 'Model'
      },
      {
        original: `${data.e.fluid.src}`,
        thumbnail: `${data.e2.fixed.src}`,
        description: 'Beauty'
      },
      {
        original: `${data.f.fluid.src}`,
        thumbnail: `${data.f2.fixed.src}`,
        description: 'Documentary'
      },
      {
        original: `${data.g.fluid.src}`,
        thumbnail: `${data.g2.fixed.src}`,
        description: 'Creative'
      },
      {
        original: `${data.h.fluid.src}`,
        thumbnail: `${data.h2.fixed.src}`,
        description: 'Documentary'
      },
      {
        original: `${data.i.fluid.src}`,
        thumbnail: `${data.i2.fixed.src}`,
        description: 'Model'
      },
      {
        original: `${data.j.fluid.src}`,
        thumbnail: `${data.j2.fixed.src}`,
        description: 'Photo Journalism'
      },
      {
        original: `${data.k.fluid.src}`,
        thumbnail: `${data.k2.fixed.src}`,
        description: 'Model'
      },
      {
        original: `${data.l.fluid.src}`,
        thumbnail: `${data.l2.fixed.src}`,
        description: 'Photo Journalism'     
      },
      {
        original: `${data.m.fluid.src}`,
        thumbnail: `${data.m2.fixed.src}`,
        description: 'Nature'
      },
      {
        original: `${data.n.fluid.src}`,
        thumbnail: `${data.n2.fixed.src}`,
        description: 'Model'
      },
      {
        original: `${data.o.fluid.src}`,
        thumbnail: `${data.o2.fixed.src}`,
        description: 'Documentary'

      },
      {
        original: `${data.p.fluid.src}`,
        thumbnail: `${data.p2.fixed.src}`,
        description: 'Beauty'
      },
    ]

  return (
    <div id = "work-id">
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
