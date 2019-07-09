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
import VerticalCenteredContent from 'components/VerticalCenteredContent'
import BlueCTA from 'components/BlueCTA'
import LargeHeroCenteredCTAH2 from 'components/LargeCenteredHeroWithCTAH2'
import { Container, Row, Col } from 'react-bootstrap';
import { Waypoint } from 'react-waypoint';
import { siteMetadata } from '../../gatsby-config'
import Helmet from 'react-helmet'

const NotFoundPage = ({ data, location }) => {
  return (
    <Layout location={location} color="bg-white" footerClass="bg-white">
      <Helmet>
        <html className='bg-white' />
        <body className='bg-white' />
      </Helmet>
      <Meta site={get(data, 'site.meta')} />
        <Section count="one" customClass="noClass custom-404">
          	<VerticalCenteredContent 
          		title="Page not found."
          		buttonTitle="Home"
          		link={__dirname}
          	/>
        </Section>
    </Layout>
  )
}

export default NotFoundPage

