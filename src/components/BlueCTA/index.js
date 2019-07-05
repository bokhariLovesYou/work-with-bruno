import React from 'react'
import LinkCta from '../LinkCta.js'
import './style.scss';
import ContentBox from '../ContentBox.js'
import Img from 'gatsby-image'


class BlueCTA extends React.Component {
  render() {
    return (
          <div className="blue-CTA text-inverted">
            <ContentBox customClass={this.props.customClass}>
              <h3>{this.props.title}</h3>
              <p className="sub-title">{this.props.subTitle}</p>
              <LinkCta title="Request Early Access" />
            </ContentBox>
            <ContentBox>
              <Img fluid={this.props.imageSrc} />
            </ContentBox>
          </div>
    )
  }
}

export default BlueCTA

