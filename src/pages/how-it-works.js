import { graphql } from 'gatsby'
import React, { Component } from "react"
import get from 'lodash/get'
import Post from 'templates/Post'
import Meta from 'components/Meta'
import Layout from 'components/Layout'
import Clients from 'components/Clients'
import Section from 'components/Section.js'
import TextContent from 'components/TextContent.js'
import ImageComp from 'components/ImageComp.js'
import SmallContent from 'components/SmallContent'
import TestimonialTitle from 'components/TestimonialTitle'
import TitleContentCTA from 'components/TitleContentCTA'
import BlueCTA from 'components/BlueCTA'
import LargeHeroCenteredCTAH2 from 'components/LargeCenteredHeroWithCTAH2'
import { Container, Row, Col } from 'react-bootstrap';
import { Waypoint } from 'react-waypoint';
import { siteMetadata } from '../../gatsby-config'
import Helmet from 'react-helmet'

class HowItWorks extends Component {
    render() {
    const { location, data } = this.props 
    return (
      <Layout location={location} color='bg-night' footerClass='bg-night text-inverted'>
        <Helmet>
          <html className='bg-night' />
          <body className='bg-night' />
        </Helmet>
        <Meta site={siteMetadata} title="How It Works" />
          <Section count="one" customClass="bg-night text-inverted floating-section border-top-bottom">
            <Container className="text-center text-lg-left">
              <Row className="align-items-xl-center">
                <Col xl="6" className="order-xl-2">
                  <TitleContentCTA 
                    title="Visual design for the busy creative."
                    paragraph="Automated layout design, premade components, and predictive vector editing. Get the basics done faster."
                    customClass="noClass"
                  />  
                </Col>
                <Col xl="6 pos-rel" className="order-xl-1 make-me-left">
                  <ImageComp 
                    imageSrc={data.imageSix.childImageSharp.fluid}
                    customClass='image-wrapper'
                    imageClass="floating-image fade-bottom"
                  />
                </Col>
              </Row>
            </Container>
          </Section>
          <Section count="two" customClass="med-large bg-night text-inverted border-top-bottom">
            <Container>
              <Row className="align-items-center">
                <Col xl="6" className="order-xl-2">
                  <ImageComp 
                    imageSrc={data.imageTwo.childImageSharp.fluid}
                    customClass='noClass'
                    imageClass="tall-image box-shadow fade-top-less"
                  />
                </Col>
                <Col xl="6" className="order-xl-1">
                  <SmallContent 
                    customClass='bottom-padding'
                    dimText='Interactions'
                    title='Simply rapid prototyping.'
                    paragraph='Brunö offers tools to design scroll, link and page interactions. But don’t stop there—add a 3D effect or momentum. Create flows that feel real. And do it all in half the time.'
                  />
                </Col>
              </Row>
            </Container>
          </Section>
          <Section count="three" customClass="med-large bg-night text-inverted">
            <Container>
              <Row className="align-items-center">
                <Col xl="6" className="order-2 order-xl-1">
                  <ImageComp 
                    imageSrc={data.imageThree.childImageSharp.fluid}
                    customClass='noClass'
                    imageClass='tall-image box-shadow'
                  />
                </Col>
                <Col xl="6" className="order-1 order-xl-2">
                  <SmallContent 
                    customClass='fix-padding'
                    dimText='Interactions'
                    title='Simply rapid prototyping.'
                    paragraph='Brunö offers tools to design scroll, link and page interactions. But don’t stop there—add a 3D effect or momentum. Create flows that feel real. And do it all in half the time.'
                  />
                </Col>
              </Row>
            </Container>
          </Section>
          <Section count="three" customClass="noClass bg-night text-inverted med-large border-top-bottom">
            <Container>
              <LargeHeroCenteredCTAH2
                title="Always interactive design."
                paragraphXS="Bring your creative ideas to life with Brunö, the best tool for interactive design."
                paragraphXSAbove='Bring your creative ideas to life with Brunö, the best tool for interactive design. Create responsive layouts, design realistic prototypes, and bring everything closer to production—all in one place.'
                imageSrc={data.imageOne.childImageSharp.fluid}
                imageClass="fade-bottom"
              />
              <Clients 
                title="The best teams use Brunö"
              />
            </Container>
          </Section>
          <Section count="five" customClass="med-large testimonial-section bg-night text-inverted">
            <Container className="text-center">
              <TextContent 
                content="“Brunö’s React codebase will allow our designers to get closer to high-fidelity implementation with engineering.”"
                customClass="bolder-font pt-2 pb-2 mw-650 ml-auto mr-auto"
              />
              <TestimonialTitle 
                imageSrc={data.imageFour.childImageSharp.fluid}
                customClass='noClass'
              />  
            </Container>
          </Section>
          <Section count="six" customClass="small-section bg-night">
            <Container>
              <BlueCTA 
                title='Get Brunö'
                subTitle='Bring your creative ideas to life.'
                imageSrc={data.imageOne.childImageSharp.fluid}
              />
            </Container>
          </Section>
      </Layout>
    )
  }
}

export default HowItWorks

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "app-one.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "homepage-image.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: { eq: "homepage-image-two.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFour: file(relativePath: { eq: "ash.png" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFive: file(relativePath: { eq: "app-two.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSix: file(relativePath: { eq: "app-three.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
