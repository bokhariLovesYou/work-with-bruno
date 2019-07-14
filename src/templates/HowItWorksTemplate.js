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

class HowItWorksTemplate extends Component {
    render() {
    const { location, data } = this.props
    const wpData = data.wordpressPage.acf; 
    const metaData = data.wordpressPage.yoast_meta;
    return (
      <Layout location={location} color='bg-night' footerClass='bg-night text-inverted'>
        <Helmet>
          <html className='bg-night' />
          <body className='bg-night' />
        </Helmet>
          <Meta site={siteMetadata} title={metaData.yoast_wpseo_title} descripton={metaData.yoast_wpseo_metadesc} />
          <Section count="one" customClass="bg-night text-inverted floating-section border-top-bottom">
            <Container className="text-center text-lg-left">
              <Row className="align-items-xl-center">
                <Col xl="6" className="order-xl-2">
                  <TitleContentCTA 
                    title={wpData.how_section_one.title}
                    paragraph={wpData.how_section_one.sub_title}
                    customClass="noClass"
                  />  
                </Col>
                <Col xl="6 pos-rel" className="order-xl-1 make-me-left">
                  <ImageComp 
                    imageSrc={wpData.how_section_one.image.localFile.childImageSharp.fluid}
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
                <Col xl="6" className="order-2 order-xl-2">
                  <ImageComp 
                    imageSrc={wpData.how_section_two.image.localFile.childImageSharp.fluid}
                    customClass='noClass'
                    imageClass="tall-image box-shadow fade-top-less"
                  />
                </Col>
                <Col xl="6" className="order-1 order-xl-1">
                  <SmallContent 
                    customClass='fix-padding hw-padding bottom-padding'
                    dimText={wpData.how_section_two.label}
                    title={wpData.how_section_two.title}
                    paragraph={wpData.how_section_two.paragraph}
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
                    imageSrc={wpData.how_section_three.image.localFile.childImageSharp.fluid}
                    customClass='noClass'
                    imageClass='tall-image box-shadow'
                  />
                </Col>
                <Col xl="6" className="order-1 order-xl-2">
                  <SmallContent 
                    customClass='fix-padding'
                    dimText={wpData.how_section_three.label}
                    title={wpData.how_section_three.title}
                    paragraph={wpData.how_section_three.paragraph}
                  />
                </Col>
              </Row>
            </Container>
          </Section>
          <Section count="four" customClass="noClass bg-night text-inverted med-large border-top-bottom">
            <Container>
              <LargeHeroCenteredCTAH2
                title={wpData.how_section_four.title}
                paragraphXS={wpData.how_section_four.paragraph}
                paragraphXSAbove={wpData.how_section_four.paragraph}
                imageSrc={wpData.how_section_four.image.localFile.childImageSharp.fluid}
                imageClass="fade-bottom-lg"
              />
              <Clients 
                title={wpData.how_section_four.client_heading}
              />
            </Container>
          </Section>
          <Section count="five" customClass="med-large testimonial-section bg-night text-inverted">
            <Container className="text-center">
              <TextContent 
                content={wpData.how_section_five.testimonial}
                customClass="bolder-font pt-2 pb-2 mw-650 ml-auto mr-auto"
              />
              <TestimonialTitle 
                imageSrc={wpData.how_section_five.image.localFile.childImageSharp.fluid}
                customClass='noClass'
              />  
            </Container>
          </Section>
          <Section count="six" customClass="small-section bg-night">
            <Container>
              <BlueCTA 
                title={wpData.how_cta.title}
                subTitle={wpData.how_cta.sub_title}
                imageSrc={data.wordpressPage.acf.how_cta.image.localFile.childImageSharp.fluid}
              />
            </Container>
          </Section>
      </Layout>
    )
  }
}

export default HowItWorksTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      title
      excerpt
      content
      yoast_meta {
        yoast_wpseo_title
        yoast_wpseo_metadesc
        yoast_wpseo_canonical
      }
      acf {
        how_section_one {
          title
          sub_title
          button_title
          button_url
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 3000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        how_section_two {
          label
          title
          paragraph
          button_title
          button_url
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 3000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        how_section_three {
          label
          title
          paragraph
          button_title
          button_url
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 3000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        how_section_four {
          title
          paragraph
          client_heading
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 3000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        how_section_five {
          testimonial
          title
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 3000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        how_cta {
          title
          sub_title
          button_title
          button_url
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 3000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`