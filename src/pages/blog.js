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
import TitleContent from 'components/TitleContent'
import BlueCTA from 'components/BlueCTA'
import BlogCard from 'components/BlogCard'
import LargeHeroCenteredCTA from 'components/LargeCenteredHeroWithCTA'
import { Container, Row, Col } from 'react-bootstrap';
import { Waypoint } from 'react-waypoint';
import { siteMetadata } from '../../gatsby-config'
import Helmet from 'react-helmet'

class Blog extends Component {

    state = {
      header: [
        {
          customClass: 'bg-white'
        },
      ],
    }

    render() {
    const { location, data } = this.props 
    return (
      <Layout location={location} color={this.state.header[0].customClass} footerClass="bg-white">
        <Helmet>
          <html className={this.state.header[0].customClass} />
          <body className={this.state.header[0].customClass} />
        </Helmet>
        <Meta site={siteMetadata} title="Why Bruno" />
        <Section count="one" customClass="noClass">
          <Container className="text-center">
            <TitleContent 
              title="Blog"
              paragraph="Exploring ideas at the intersection of design, code, and technology. Read our blog below."
              customClass="equip-width"
            />  
          </Container>
          <Container className="pt-4">
            <Row>
              <Col lg="8">
                <BlogCard 
                  title="Design With Radial Gradients"
                  link="/hello"
                  customClass="noClass"
                  imageSrc={data.imageTwo.childImageSharp.fluid}
                />
              </Col>
              <Col lg="4">
                <BlogCard 
                  title="Design With Radial Gradients"
                  link="/hello"
                  customClass="noClass"
                  imageSrc={data.imageTwo.childImageSharp.fluid}
                />
              </Col>
              <Col lg="4">
                <BlogCard 
                  title="Design With Radial Gradients"
                  link="/hello"
                  customClass="noClass"
                  imageSrc={data.imageTwo.childImageSharp.fluid}
                />
              </Col>
              <Col lg="4">
                <BlogCard 
                  title="Design With Radial Gradients"
                  link="/hello"
                  customClass="noClass"
                  imageSrc={data.imageTwo.childImageSharp.fluid}
                />
              </Col>
              <Col lg="4">
                <BlogCard 
                  title="Design With Radial Gradients"
                  link="/hello"
                  customClass="noClass"
                  imageSrc={data.imageTwo.childImageSharp.fluid}
                />
              </Col>
            </Row>
          </Container>
        </Section>
          <Section count="two" customClass="med-large testimonial-section bg-gray">
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
          </Section>      </Layout>
    )
  }
}

export default Blog

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

