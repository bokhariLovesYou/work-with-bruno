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
import { siteMetadata } from '../../gatsby-config'
import Helmet from 'react-helmet'

const HomepageTemplate = ({ data, location }) => {
    const metaData = data.wordpressPage.yoast_meta;
    return (
    <Layout location={location} color="bg-white" footerClass="bg-white">
      <Helmet>
        <html className='bg-white' />
        <body className='bg-white' />
      </Helmet>
      <Meta site={siteMetadata} title={metaData.yoast_wpseo_title} descripton={metaData.yoast_wpseo_metadesc} />
        <Section count="one" customClass="noClass">
          <Container>
            <LargeHeroCenteredCTA 
              title={data.wordpressPage.acf.homepage_section_one.title}
              paragraphXS={data.wordpressPage.acf.homepage_section_one.sub_title}
              paragraphXSAbove={data.wordpressPage.acf.homepage_section_one.sub_title_large}
              imageSrc={data.wordpressPage.acf.homepage_section_one.image.localFile.childImageSharp.fluid}
            />
            <Clients 
              title={data.wordpressPage.acf.homepage_section_one.clients_heading}
            />
          </Container>
        </Section>
        <Section count="two" customClass="bg-gray med-large">
          <Container>
            <Row className="align-items-center">
              <Col xl="6">
                <ImageComp 
                  imageSrc={data.wordpressPage.acf.homepage_section_two.image.localFile.childImageSharp.fluid}
                  customClass='noClass'
                  imageClass="tall-image box-shadow"
                />
              </Col>
              <Col xl="6">
                <SmallContent 
                  customClass='top-padding'
                  dimText={data.wordpressPage.acf.homepage_section_two.label}
                  title={data.wordpressPage.acf.homepage_section_two.title}
                  paragraph={data.wordpressPage.acf.homepage_section_two.paragraph}
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
                  imageSrc={data.wordpressPage.acf.homepage_section_three.image.localFile.childImageSharp.fluid}
                  customClass='noClass'
                  imageClass='tall-image box-shadow'
                />
              </Col>
              <Col xl="6" className="order-xl-1">
                <SmallContent 
                  customClass='bottom-padding'
                  dimText={data.wordpressPage.acf.homepage_section_three.label}
                  title={data.wordpressPage.acf.homepage_section_three.title}
                  paragraph={data.wordpressPage.acf.homepage_section_three.paragraph}
                />
              </Col>
            </Row>
          </Container>
        </Section>
        <Section count="four" customClass="bg-lightblue med-large text-inverted super-large-text">
          <Container>
            <SmallContent 
              customClass="mw-850"
                  dimText={data.wordpressPage.acf.homepage_section_four.label}
                  title={data.wordpressPage.acf.homepage_section_four.title}
                  paragraph={data.wordpressPage.acf.homepage_section_four.paragraph}
            />
            <ImageComp 
              imageSrc={data.wordpressPage.acf.homepage_section_four.image.localFile.childImageSharp.fluid}
              customClass='mt-4 mb-4 mt-lg-5 mb-lg-5'
            />
            <TextContent 
              content={data.wordpressPage.acf.homepage_section_four.additional_content}
              customClass="bolder-font pt-1 pb-2"
            />
          </Container>
        </Section>
        <Section count="five" customClass="med-large testimonial-section">
          <Container className="text-center">
            <TextContent 
              content={data.wordpressPage.acf.homepage_section_five.testimonial}
              customClass="bolder-font pt-2 pb-2 mw-650 ml-auto mr-auto"
            />
            <TestimonialTitle 
              imageSrc={data.wordpressPage.acf.homepage_section_five.image.localFile.childImageSharp.fluid}
              customClass='noClass'
            />  
          </Container>
        </Section>
        <Section count="six" customClass="small-section">
          <Container>
            <BlueCTA 
              title={data.wordpressPage.acf.homepage_cta.title}
              subTitle={data.wordpressPage.acf.homepage_cta.sub_title}
              imageSrc={data.wordpressPage.acf.homepage_cta.image.localFile.childImageSharp.fluid}
            />
          </Container>
        </Section>
    </Layout>
  )
}

export default HomepageTemplate

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
        homepage_section_one {
          title
          sub_title
          sub_title_large
          button_title
          button_url
          clients_heading
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
        homepage_section_two {
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
        homepage_section_three {
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
        homepage_section_four {
          label
          title
          paragraph
          button_title
          button_url
          additional_content
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
        homepage_section_five {
          testimonial
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
        homepage_cta {
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


