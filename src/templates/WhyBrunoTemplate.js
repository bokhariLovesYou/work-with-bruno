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

class WhyBrunoTemplate extends Component {

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
    const wpData = data.wordpressPage.acf;
    const metaData = data.wordpressPage.yoast_meta;
    console.log(wpData);
    return (
      <Layout location={location} color={this.state.header[0].customClass} footerClass="bg-white">
        <Helmet>
          <html className={this.state.header[0].customClass} />
          <body className={this.state.header[0].customClass} />
        </Helmet>
        <Meta site={siteMetadata} title={metaData.yoast_wpseo_title} descripton={metaData.yoast_wpseo_metadesc} />
          <Section count="one" customClass="bg-lightblue text-inverted floating-section">
            <Container className="text-center text-lg-left">
              <Row className="align-items-xl-center">
                <Col xl="6">
                  <TitleContentCTA 
                    title={wpData.whyBruno_section_one.title}
                    paragraph={wpData.whyBruno_section_one.sub_title}
                    customClass="noClass"
                  />  
                </Col>
                <Col xl="6 pos-rel">
                  <ImageComp 
                    imageSrc={data.wordpressPage.acf.whyBruno_section_one.image.localFile.childImageSharp.fluid}
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
                    imageSrc={data.wordpressPage.acf.whyBruno_section_two.image.localFile.childImageSharp.fluid}
                    customClass='noClass'
                    imageClass='tall-image box-shadow'
                  />
                </Col>
                <Col xl="6" className="order-1 order-xl-2">
                  <SmallContent 
                    customClass='fix-padding'
                    dimText={wpData.whyBruno_section_two.label}
                    title={wpData.whyBruno_section_two.label}
                    paragraph={wpData.whyBruno_section_two.paragraph}
                  />
                </Col>
              </Row>
            </Container>
          </Section>
          <Section count="three" customClass="noClass bg-gray med-large">
            <Container>
              <LargeHeroCenteredCTAH2
                title={wpData.whyBruno_section_three.title}
                paragraphXS={wpData.whyBruno_section_three.paragraph}
                paragraphXSAbove={wpData.whyBruno_section_three.paragraph}
                imageSrc={data.wordpressPage.acf.whyBruno_section_three.image.localFile.childImageSharp.fluid}
              />
              <Clients 
                title={wpData.whyBruno_section_three.client_heading}
              />
            </Container>
          </Section>
          <Section count="four" customClass="med-large bg-white">
            <Container>
              <Row className="align-items-center">
                <Col xl="6" className="order-xl-2">
                  <ImageComp 
                    imageSrc={data.wordpressPage.acf.whyBruno_section_four.image.localFile.childImageSharp.fluid}
                    customClass='noClass'
                    imageClass="tall-image box-shadow"
                  />
                </Col>
                <Col xl="6" className="order-xl-1">
                  <SmallContent 
                    customClass='bottom-padding'
                    dimText={wpData.whyBruno_section_four.label}
                    title={wpData.whyBruno_section_four.title}
                    paragraph={wpData.whyBruno_section_four.paragraph}
                  />
                </Col>
              </Row>
            </Container>
          </Section>
          <Section count="five" customClass="med-large testimonial-section bg-gray">
            <Container className="text-center">
              <TextContent 
                content={wpData.whyBruno_section_five.testimonial}
                customClass="bolder-font pt-2 pb-2 mw-650 ml-auto mr-auto"
              />
              <TestimonialTitle 
                imageSrc={data.wordpressPage.acf.whyBruno_section_five.image.localFile.childImageSharp.fluid}
                customClass='noClass'
              />  
            </Container>
          </Section>
          <Section count="six" customClass="small-section bg-gray">
            <Container>
              <BlueCTA 
                title={wpData.whyBruno_cta.title}
                subTitle={wpData.whyBruno_cta.sub_title}
                imageSrc={data.wordpressPage.acf.whyBruno_cta.image.localFile.childImageSharp.fluid}
              />
            </Container>
          </Section>
      </Layout>
    )
  }
}

export default WhyBrunoTemplate

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
        whyBruno_section_one {
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
        whyBruno_section_two {
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
        whyBruno_section_three {
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
        whyBruno_section_four {
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
        whyBruno_section_five {
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
        whyBruno_cta {
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


