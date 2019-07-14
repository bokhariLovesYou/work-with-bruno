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
import { Link } from 'gatsby'
import Button from 'components/Button.js'

// This would normally be in a Redux store or some other global data store.
if (typeof window !== `undefined`) {
  window.postsToShow = 5
}

class BlogOverview extends Component {
  componentDidMount() {
    let cardLength = document.querySelectorAll('.blog-card').length;
    console.log(cardLength);
  }


  constructor() {
    super()
    let postsToShow = 5
    if (typeof window !== `undefined`) {
      postsToShow = window.postsToShow
    }

    this.state = {
      showingMore: postsToShow > 5,
      postsToShow,
	  showWaypoint: true,
	  loading: false,
    loadMoreButtonClass: 'show'
    }
  }

    render() {
    const { location, data } = this.props 
    const wpData = data.allWordpressPost;
	   let counter = 0;
    let scrollCounter = 0;
    const pageSpecificData = data.allWordpressAcfPages.edges[0].node.acf;
	const metaData = data.wordpressPage.yoast_meta;

	const turnLoadingOff = () => {
		this.setState({
			loading: false
		})
	}

    const fireMorePosts = () => {
	    this.setState({
	      postsToShow: this.state.postsToShow + 5,
	      loading: true
	    }, () => {
        setTimeout( () => { 
          this.cardLength = document.querySelectorAll('.blog-card').length; 
          if (this.cardLength == wpData.edges.length) {
            this.setState({
              loadMoreButtonClass: 'hide'
            });
          }
        }, 10);
      })
    }

	const onWaypointEnter = () => {
	  if (!this.state.loading) {
		  fireMorePosts();
		  turnLoadingOff();
	  }
	}

    return (
      <Layout location={location} color='bg-white' footerClass="bg-white">
        <Helmet>
          <html className='bg-white' />
          <body className='bg-white' />
        </Helmet>
        <Meta site={siteMetadata} title={metaData.yoast_wpseo_title} descripton={metaData.yoast_wpseo_metadesc} />
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
            {wpData.edges.slice(0, this.state.postsToShow).map(({ node }) => {
            	counter++
            	if (counter < 2 || counter % 11 == 0) {
	              return <Col lg={8} key={counter}>
	                <BlogCard 
	                  title={node.title}
	                  link={__dirname + '/blog/' + node.slug}
	                  customClass="noClass"
	                  imageSrc={node.featured_media.localFile.childImageSharp.fluid}
	                />
	              </Col>
	          	} else if (counter % 7 == 0) {
	              return <Col lg={8} key={counter}>
	                <BlogCard 
	                  title={node.title}
	                  link={__dirname + '/blog/' + node.slug}
	                  customClass="noClass"
	                  imageSrc={node.featured_media.localFile.childImageSharp.fluid}
	                />
	              </Col>
	          	} else {
	              return <Col lg={4} key={node.slug}>
	                <BlogCard 
	                  title={node.title}
	                  link={__dirname + '/blog/' + node.slug}
	                  customClass="noClass"
	                  imageSrc={node.featured_media.localFile.childImageSharp.fluid}
	                />
	              </Col>	
	          	}
              })}
            </Row>
            <div className="text-center">
              <Button
                extraClass={'mt-3 ' + this.state.loadMoreButtonClass}
                title="Load more Articles"
                customEvent={onWaypointEnter}
              /> 
            </div>
          </Container>
        </Section>
          <Section count="two" customClass="med-large testimonial-section bg-gray">
            <Container className="text-center">
              <TextContent 
                content={pageSpecificData.blogOverview_section_five.testimonial}
                customClass="bolder-font pt-2 pb-2 mw-650 ml-auto mr-auto"
              />
              <TestimonialTitle 
                imageSrc={pageSpecificData.blogOverview_section_five.image.localFile.childImageSharp.fluid}
                customClass='noClass'
              />  
            </Container>
          </Section>
          <Section count="six" customClass="small-section bg-gray">
            <Container>
              <BlueCTA 
                title={pageSpecificData.blogOverview_cta.title}
                subTitle={pageSpecificData.blogOverview_cta.sub_title}
                imageSrc={pageSpecificData.blogOverview_cta.image.localFile.childImageSharp.fluid}
              />
            </Container>
          </Section> 
        </Layout>
    )
  }
}

export default BlogOverview

export const query = graphql`
{
  allWordpressPost(sort: {fields: [date] order: DESC}) {
    edges {
      node {
        title
        slug
        featured_media {
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
  wordpressPage {
    title
    excerpt
    content
    yoast_meta {
      yoast_wpseo_title
      yoast_wpseo_metadesc
      yoast_wpseo_canonical
    }
  }
  allWordpressAcfPages {
    edges {
      node {
        acf {
          blogOverview_section_five {
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
          blogOverview_cta {
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
  }
}
`