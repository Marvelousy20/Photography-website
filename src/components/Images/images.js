import React from 'react'
import styles from './image.module.css'
import mystyles from './image.scss'
import ImageGallery from 'react-image-gallery';
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import ScrollAnimation from 'react-animate-on-scroll'


const Images = () =>  {

  // const data = useStaticQuery(graphql`
  //   query Images {
  //     optimized: allFile(filter: {relativeDirectory: {eq: "optimized"}}) {
  //       nodes {
  //         childImageSharp {
  //           fixed {
  //             ...GatsbyImageSharpFixed
  //           }

  //           fluid {
  //             ...GatsbyImageSharpFluid
  //           }
  //         }
  //       }  
  //     }
  //     thumbnails: allFile(filter: {relativeDirectory: {eq: "thumbnails"}}) {
  //       nodes {
  //         id 
  //         childImageSharp {
  //           fixed(width: 100) {
  //             ...GatsbyImageSharpFixed
  //           }
  //         }
  //       }
  //     }
  //   } 
  // `)

  const data = useStaticQuery(graphql`
    query Images {
      a: imageSharp(fluid: {originalName: {eq: "a.jpg"}}) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
      c: imageSharp(fluid: {originalName: {eq: "c.jpg"}}) {
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
        fixed{
          ...GatsbyImageSharpFixed
        }
      }

      c2: imageSharp(fixed: {originalName: {eq: "c_tn.jpg"}}) {
        fixed{ 
          ...GatsbyImageSharpFixed
        }
      }

      d2: imageSharp(fixed: {originalName: {eq: "d_tn.jpg"}}) {
        fixed{ 
          ...GatsbyImageSharpFixed
        }
      }

      e2: imageSharp(fixed: {originalName: {eq: "e_tn.jpg"}}) {
        fixed{ 
          ...GatsbyImageSharpFixed
        }
      }

      f2: imageSharp(fixed: {originalName: {eq: "f_tn.jpg"}}) {
        fixed{ 
          ...GatsbyImageSharpFixed
        }
      }

      g2: imageSharp(fixed: {originalName: {eq: "g_tn.jpg"}}) {
        fixed{ 
          ...GatsbyImageSharpFixed
        }
      }

      h2: imageSharp(fixed: {originalName: {eq: "h_tn.jpg"}}) {
        fixed{ 
          ...GatsbyImageSharpFixed
        }
      }

      i2: imageSharp(fixed: {originalName: {eq: "i_tn.jpg"}}) {
        fixed{ 
          ...GatsbyImageSharpFixed
        }
      }

      j2: imageSharp(fixed: {originalName: {eq: "j_tn.jpg"}}) {
        fixed{ 
          ...GatsbyImageSharpFixed
        }
      }

      k2: imageSharp(fixed: {originalName: {eq: "k_tn.jpg"}}) {
        fixed{ 
          ...GatsbyImageSharpFixed
        }
      }

      l2: imageSharp(fixed: {originalName: {eq: "l_tn.jpg"}}) {
        fixed{ 
          ...GatsbyImageSharpFixed
        }
      }

      m2: imageSharp(fixed: {originalName: {eq: "m_tn.jpg"}}) {
        fixed{ 
          ...GatsbyImageSharpFixed
        }
      }

      n2: imageSharp(fixed: {originalName: {eq: "n_tn.jpg"}}) {
        fixed{ 
          ...GatsbyImageSharpFixed
        }
      }

      l2: imageSharp(fixed: {originalName: {eq: "l_tn.jpg"}}) {
        fixed{ 
          ...GatsbyImageSharpFixed
        }
      }

      o2: imageSharp(fixed: {originalName: {eq: "o_tn.jpg"}}) {
        fixed{ 
          ...GatsbyImageSharpFixed
        }
      }

      p2: imageSharp(fixed: {originalName: {eq: "p.jpg"}}) {
        fixed{ 
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


  // const images = [
  //   {
  //     original: `${data.a.fluid.src}`,
  //     thumbnail: `${data.thumbnails.nodes[0].childImageSharp.fixed.src}`,
  //     description: 'Photo Journalism',
  //   },
  //   {
  //     original: `${data.optimized.nodes[13].childImageSharp.fluid.src}`,
  //     thumbnail: `${data.thumbnails.nodes[11].childImageSharp.fixed.src}`,
  //     description: 'Documentary',
  //   },
  //   {
  //     original: `${data.optimized.nodes[1].childImageSharp.fluid.src}`,
  //     thumbnail: `${data.thumbnails.nodes[10].childImageSharp.fixed.src}`,
  //     description: 'Documentary',
  //   },
  //   {
  //     original: `${data.optimized.nodes[11].childImageSharp.fluid.src}`,
  //     thumbnail: `${data.thumbnails.nodes[13].childImageSharp.fixed.src}`,
  //     description: 'Documentary',
  //   }, 
  //   {
  //     original: `${data.optimized.nodes[5].childImageSharp.fluid.src}`,
  //     thumbnail: `${data.thumbnails.nodes[8].childImageSharp.fixed.src}`,
  //     description: 'Photo Journalism',
  //   }, 
  //   {
  //     original: `${data.optimized.nodes[6].childImageSharp.fluid.src}`,
  //     thumbnail: `${data.thumbnails.nodes[2].childImageSharp.fixed.src}`,
  //     description: 'Model',
  //   }, 
  //   {
  //     original: `${data.optimized.nodes[7].childImageSharp.fluid.src}`,
  //     thumbnail: `${data.thumbnails.nodes[6].childImageSharp.fixed.src}`,
  //     description: 'Beauty',
  //   }, 
  //   {
  //     original: `${data.optimized.nodes[8].childImageSharp.fluid.src}`,
  //     thumbnail: `${data.thumbnails.nodes[5].childImageSharp.fixed.src}`,
  //     description: 'Beauty',
  //   },
  //   {
  //     original: `${data.optimized.nodes[9].childImageSharp.fluid.src}`,
  //     thumbnail: `${data.thumbnails.nodes[12].childImageSharp.fixed.src}`,
  //     description: 'Model',
  //   },
  //   {
  //     original: `${data.optimized.nodes[10].childImageSharp.fluid.src}`,
  //     thumbnail: `${data.thumbnails.nodes[3].childImageSharp.fixed.src}`,
  //     description: 'Photo Journalism',
  //   },
  //   {
  //     original: `${data.optimized.nodes[0].childImageSharp.fluid.src}`,
  //     thumbnail: `${data.thumbnails.nodes[14].childImageSharp.fixed.src}`,
  //     description: 'Creative',
  //   },
  //   {
  //     original: `${data.optimized.nodes[12].childImageSharp.fluid.src}`,
  //     thumbnail: `${data.thumbnails.nodes[6].childImageSharp.fixed.src}`,
  //     description: 'Nature',
  //   },
  //   {
  //     original: `${data.optimized.nodes[3].childImageSharp.fluid.src}`,
  //     thumbnail: `${data.thumbnails.nodes[9].childImageSharp.fixed.src}`,
  //     description: 'Model',
  //   },
  //   {
  //     original: `${data.optimized.nodes[2].childImageSharp.fluid.src}`,
  //     thumbnail: `${data.thumbnails.nodes[4].childImageSharp.fixed.src}`,
  //     description: 'Documentary',
  //   },
  //   {
  //     original: `${data.optimized.nodes[4].childImageSharp.fluid.src}`,
  //     thumbnail: `${data.thumbnails.nodes[7].childImageSharp.fixed.src}`,
  //     description: 'Model',
  //   },
  // ];      

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
