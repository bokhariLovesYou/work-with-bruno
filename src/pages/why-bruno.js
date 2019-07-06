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

class WhyBruno extends Component {

    state = {
      header: [
        {
          customClass: 'bg-lightblue'
        },
      ],
    }

    render() {
    const handleHeaderClass = () => {
        if (this.state.header[0].customClass === "bg-lightblue") {
          this.setState(prevState => ({
            customClass: (prevState.header[0].customClass = "bg-white")
          }))
        } else {
          this.setState(prevState => ({
            customClass: (prevState.header[0].customClass = "bg-lightblue")
          }))
        }
      }
    const { location, data } = this.props 
    return (
      <Layout location={location} color={this.state.header[0].customClass}>
        <Helmet>
          <html className={this.state.header[0].customClass} />
        </Helmet>
        <Meta site={siteMetadata} title="Why Bruno" />
          <Section count="one" customClass="bg-lightblue text-inverted floating-section">
            <Container className="text-center text-lg-left">
              <Row className="align-items-xl-center">
                <Col xl="6">
                  <TitleContentCTA 
                    title="Visual design for the busy creative."
                    paragraph="Automated layout design, premade components, and predictive vector editing. Get the basics done faster."
                    customClass="noClass"
                  />  
                </Col>
                <Col xl="6 pos-rel">
                  <ImageComp 
                    imageSrc={data.imageOne.childImageSharp.fluid}
                    customClass='image-wrapper'
                    imageClass="floating-image"
                  />
                </Col>
              </Row>
            </Container>
          </Section>
          <Waypoint
            onLeave={handleHeaderClass}
            bottomOffset="99%" topOffset="0%"
            />
          <Section count="two" customClass="med-large bg-white">
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
          <Section count="three" customClass="noClass bg-gray med-large">
            <Container>
              <LargeHeroCenteredCTAH2
                title="Always interactive design."
                paragraphXS="Bring your creative ideas to life with Brunö, the best tool for interactive design."
                paragraphXSAbove='Bring your creative ideas to life with Brunö, the best tool for interactive design. Create responsive layouts, design realistic prototypes, and bring everything closer to production—all in one place.'
                imageSrc={data.imageOne.childImageSharp.fluid}
              />
              <Clients 
                title="The best teams use Brunö"
              />
            </Container>
          </Section>
          <Section count="four" customClass="med-large bg-white">
            <Container>
              <Row className="align-items-center">
                <Col xl="6" className="order-xl-2">
                  <ImageComp 
                    imageSrc={data.imageTwo.childImageSharp.fluid}
                    customClass='noClass'
                    imageClass="tall-image box-shadow"
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
          <Section count="five" customClass="med-large testimonial-section bg-gray">
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
          <Section count="six" customClass="small-section bg-gray">
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

export default WhyBruno

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
  }
`;

