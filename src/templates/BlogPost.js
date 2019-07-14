import { Link } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import Img from 'gatsby-image'
import Footer from 'components/Footer'
import Layout from 'components/Layout'
import Helmet from 'react-helmet'
import Meta from 'components/Meta'
import { siteMetadata } from '../../gatsby-config'
import Section from 'components/Section.js'
import { Container, Row, Col } from 'react-bootstrap'
import TextContent from 'components/TextContent.js'
import TestimonialTitle from 'components/TestimonialTitle'
import BlueCTA from 'components/BlueCTA'
import BlogCard from 'components/BlogCard'

const BlogPostTemplate = ({ data, location }) => {
	const wpData = data.wordpressPost;
	const metaData = data.wordpressPost.yoast_meta;
	const globalData = data.allWordpressPage.edges[0].node.acf
	const recentPosts = data.allWordpressPost;
	const shuffleArray = array => {
	  let i = array.length - 1;
	  for (; i > 0; i--) {
	    const j = Math.floor(Math.random() * (i + 1));
	    const temp = array[i];
	    array[i] = array[j];
	    array[j] = temp;
	  }
	  return array;
	}
	const shuffledPosts = shuffleArray(recentPosts.edges);
	console.log(shuffledPosts);
	return (
      <Layout location={location} color='bg-white' footerClass="bg-white">
        <Helmet>
          <html className='bg-white' />
          <body className='bg-white single-post' />
        </Helmet>
        <Meta title={metaData.yoast_wpseo_title} descripton={metaData.yoast_wpseo_metadesc} />
	    <main className="article container">
	      <div className="excerpt equip-width">
	        <div className="content">
	          <h1>{wpData.title}</h1>
	          { /* <p className="sub-title">{wpData.excerpt}</p>
	          <p className="date">Hello</p> */}
	        </div>
	      </div>
	        <div className="image-container">
	        	<Img className="featured-image" fluid={wpData.featured_media.localFile.childImageSharp.fluid} />
	        </div>
	        <article
	          className="content equip-width"
	          dangerouslySetInnerHTML={{ __html: wpData.content }}
	        />
	    </main>
	    <Section customClass="recent-posts">
			  <Container>
			  <h2 className="text-center rp-h2">Explore more.</h2>
	            <Row>
	            {shuffledPosts.slice(0, 3).map(({ node }) => (
	             	<Col lg={4} key={node.slug}>
		                <BlogCard 
		                  title={node.title}
		                  link={'/blog/' + node.slug}
		                  customClass="noClass"
		                  imageSrc={node.featured_media.localFile.childImageSharp.fluid}
		                />
		             </Col>
	              ))}
	            </Row>
	          </Container>
          </Section>
	      <Section count="two" customClass="med-large testimonial-section bg-white">
	        <Container className="text-center">
	          <TextContent 
	            content={globalData.blogOverview_section_five.testimonial}
	            customClass="bolder-font pt-2 pb-2 mw-650 ml-auto mr-auto"
	          />
	          <TestimonialTitle 
	            imageSrc={globalData.blogOverview_section_five.image.localFile.childImageSharp.fluid}
	            customClass='noClass'
	          />  
	        </Container>
	      </Section>
	      <Section count="three" customClass="small-section bg-white">
	        <Container>
	          <BlueCTA 
	            title={globalData.blogOverview_cta.title}
	            subTitle={globalData.blogOverview_cta.sub_title}
	            imageSrc={globalData.blogOverview_cta.image.localFile.childImageSharp.fluid}
	          />
	        </Container>
	      </Section> 
	  </Layout>
	)
}

export default BlogPostTemplate

export const query = graphql`
  query($id: Int!) {
	  allWordpressPage {
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
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      excerpt
      content
      date(formatString: "MMMM DD, YYYY")
		featured_media {
          localFile {
            childImageSharp {
              fluid(maxWidth: 3000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      yoast_meta {
        yoast_wpseo_title
        yoast_wpseo_metadesc
        yoast_wpseo_canonical
      }
    }
  }
`