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
import TitleContentCTAH2 from 'components/TitleContentCTAH2'
import BlueCTA from 'components/BlueCTA'
import Card from 'components/Card'
import LargeHeroCenteredCTAH2 from 'components/LargeCenteredHeroWithCTAH2'
import { Container, Row, Col } from 'react-bootstrap';
import LargeHeroCenteredCTA from 'components/LargeCenteredHeroWithCTA'
import { Waypoint } from 'react-waypoint';
import { siteMetadata } from '../../gatsby-config'
import Helmet from 'react-helmet'

class Features extends Component {

    state = {
      header: [
        {
          customClass: 'bg-blue'
        },
      ],
    }

    render() {
    const handleHeaderClass = () => {
        if (this.state.header[0].customClass === "bg-blue") {
          this.setState(prevState => ({
            customClass: (prevState.header[0].customClass = "bg-white")
          }))
        } else {
          this.setState(prevState => ({
            customClass: (prevState.header[0].customClass = "bg-blue")
          }))
        }
      }

    const { location, data } = this.props 
    return (
      <Layout location={location} color={this.state.header[0].customClass} footerClass="bg-white">
        <Helmet>
          <html className={this.state.header[0].customClass} />
          <body className={this.state.header[0].customClass} />
        </Helmet>
        <Meta site={siteMetadata} title="Features" />
          <Section count="one" customClass="bg-blue text-inverted floating-section">
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
                  <TitleContentCTAH2
                    title="Visual design for the busy creative."
                    paragraph="Automated layout design, premade components, and predictive vector editing. Get the basics done faster."
                    customClass="pl-15 pr-15 equip-width text-lg-center"
                  />  
            </Container>
            <Container className="pt-4">
              <Row>
                <Col lg="6">
                  <Card 
                    imageSrc={data.imageOne.childImageSharp.fluid}
                    title="Publish."
                    content="Publish your packages to the private Team Store, where only your team can access, update and work off a shared set of components."
                  />
                </Col>
                <Col lg="6">
                  <Card 
                    imageSrc={data.imageOne.childImageSharp.fluid}
                    title="Forecast."
                    content="Publish your packages to the private Team Store, where only your team can access, update and work off a shared set of components."
                  />
                </Col>
                <Col lg="6">
                  <Card 
                    imageSrc={data.imageOne.childImageSharp.fluid}
                    title="Simple."
                    content="Publish your packages to the private Team Store, where only your team can access, update and work off a shared set of components."
                  />
                </Col>
                <Col lg="6">
                  <Card 
                    imageSrc={data.imageOne.childImageSharp.fluid}
                    title="Choose."
                    content="Publish your packages to the private Team Store, where only your team can access, update and work off a shared set of components."
                  />
                </Col>
              </Row>
            </Container>
          </Section>
          <Section count="three" customClass="med-large bg-gray">
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
          <Section count="four" customClass="med-large testimonial-section bg-white">
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
          <Section count="five" customClass="small-section bg-white">
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

export default Features

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
    imageSix: file(relativePath: { eq: "app-three.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

