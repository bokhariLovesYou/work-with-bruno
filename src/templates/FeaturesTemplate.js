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
    const wpData = data.wordpressPage.acf 
    const metaData = data.wordpressPage.yoast_meta;
    return (
      <Layout location={location} color={this.state.header[0].customClass} footerClass="bg-white">
        <Helmet>
          <html className={this.state.header[0].customClass} />
          <body className={this.state.header[0].customClass} />
        </Helmet>
        <Meta site={siteMetadata} title={metaData.yoast_wpseo_title} descripton={metaData.yoast_wpseo_metadesc} />
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
                    imageSrc={wpData.features_section_one.image.localFile.childImageSharp.fluid}
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
                    title={wpData.features_section_two.title}
                    paragraph={wpData.features_section_two.subtitle}
                    customClass="pl-15 pr-15 equip-width text-lg-center"
                  />  
            </Container>
            <Container className="pt-4">
              <Row>
              { wpData.features_section_two.grid_repeater.map ( ( elem, index ) => 
                <Col lg="6" key={index}>
                  <Card 
                    imageSrc={elem.image.localFile.childImageSharp.fluid}
                    title={elem.title}
                    content={elem.subtitle}
                  />
                </Col>
              )}
              </Row>
            </Container>
          </Section>
          <Section count="three" customClass="med-large bg-gray">
            <Container>
              <Row className="align-items-center">
                <Col xl="6" className="order-2 order-xl-1">
                  <ImageComp 
                    imageSrc={wpData.features_section_three.image.localFile.childImageSharp.fluid}
                    customClass='noClass'
                    imageClass='tall-image box-shadow'
                  />
                </Col>
                <Col xl="6" className="order-1 order-xl-2">
                  <SmallContent 
                    customClass='fix-padding'
                    dimText={wpData.features_section_three.label}
                    title={wpData.features_section_three.title}
                    paragraph={wpData.features_section_three.paragraph}
                  />
                </Col>
              </Row>
            </Container>
          </Section>
          <Section count="four" customClass="med-large testimonial-section bg-white">
            <Container className="text-center">
              <TextContent 
                content={wpData.features_section_five.testimonial}
                customClass="bolder-font pt-2 pb-2 mw-650 ml-auto mr-auto"
              />
              <TestimonialTitle 
                imageSrc={wpData.features_section_five.image.localFile.childImageSharp.fluid}
                customClass='noClass'
              />  
            </Container>
          </Section>
          <Section count="five" customClass="small-section bg-white">
            <Container>
              <BlueCTA 
                title={wpData.features_cta.title}
                subTitle={wpData.features_cta.sub_title}
                imageSrc={wpData.features_cta.image.localFile.childImageSharp.fluid}
              />
            </Container>
          </Section>
      </Layout>
    )
  }
}

export default Features

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
        features_section_one {
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
        features_section_two {
          title
          subtitle
          button_title
          button_url
          grid_repeater {
            image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 3000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            title
            subtitle
          }
        }
        features_section_three {
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
        features_section_five {
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
        features_cta {
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