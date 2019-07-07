import { graphql } from 'gatsby'
import React from 'react'
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
import BlueCTA from 'components/BlueCTA'
import LargeHeroCenteredCTA from 'components/LargeCenteredHeroWithCTA'
import { Container, Row, Col } from 'react-bootstrap'
import Helmet from 'react-helmet'

const Homepage = ({ data, location }) => {
  const posts = get(data, 'remark.posts')
  return (
    <Layout location={location} color="bg-white" footerClass="bg-white">
      <Helmet>
        <html className='bg-white' />
        <body className='bg-white' />
      </Helmet>
      <Meta site={get(data, 'site.meta')} />
        <Section count="one" customClass="noClass">
          <Container>
            <LargeHeroCenteredCTA 
              title="Always interactive, lightning fast design."
              paragraphXS="Bring your creative ideas to life with Brunö, the best tool for interactive design."
              paragraphXSAbove='Bring your creative ideas to life with Brunö, the best tool for interactive design. Create responsive layouts, design realistic prototypes, and bring everything closer to production—all in one place.'
              imageSrc={data.imageOne.childImageSharp.fluid}
            />
            <Clients 
              title="The best teams use Brunö"
            />
          </Container>
        </Section>
        <Section count="two" customClass="bg-gray med-large">
          <Container>
            <Row className="align-items-center">
              <Col xl="6">
                <ImageComp 
                  imageSrc={data.imageTwo.childImageSharp.fluid}
                  customClass='noClass'
                  imageClass="tall-image box-shadow"
                />
              </Col>
              <Col xl="6">
                <SmallContent 
                  customClass='top-padding'
                  dimText='Interactions'
                  title='Simply rapid prototyping.'
                  paragraph='Brunö offers tools to design scroll, link and page interactions. But don’t stop there—add a 3D effect or momentum. Create flows that feel real. And do it all in half the time.'
                />
              </Col>
            </Row>
          </Container>
        </Section>
        <Section count="three" customClass="med-large">
          <Container>
            <Row className="align-items-center">
              <Col xl="6" className="order-xl-2">
                <ImageComp 
                  imageSrc={data.imageThree.childImageSharp.fluid}
                  customClass='noClass'
                  imageClass='tall-image box-shadow'
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
        <Section count="four" customClass="bg-lightblue med-large text-inverted super-large-text">
          <Container>
            <SmallContent 
              customClass="mw-850"
                  dimText='Interactions'
                  title='Simply rapid prototyping.'
                  paragraph='Brunö offers tools to design scroll, link and page interactions. But don’t stop there—add a 3D effect or momentum. Create flows that feel real. And do it all in half the time.'
            />
            <ImageComp 
              imageSrc={data.imageOne.childImageSharp.fluid}
              customClass='mt-4 mb-4 mt-lg-5 mb-lg-5'
            />
            <TextContent 
              content="“Brunö’s React codebase will allow our designers to get closer to high-fidelity implementation with engineering.”"
              customClass="bolder-font pt-1 pb-2"
            />
          </Container>
        </Section>
        <Section count="five" customClass="med-large testimonial-section">
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
        <Section count="six" customClass="small-section">
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

export default Homepage

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

