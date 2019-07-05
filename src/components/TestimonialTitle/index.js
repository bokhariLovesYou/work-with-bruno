import React from 'react'
import './style.scss';
import ContentBox from '../ContentBox.js'
import Img from 'gatsby-image'


class TestimonialTitle extends React.Component {
  render() {
    return (
          <ContentBox customClass={this.props.customClass}>
            <div className="testimonial-title">
              <Img fluid={this.props.imageSrc} />
              <p>Ash Adamson, Flexport</p>
            </div>
          </ContentBox>
    )
  }
}

export default TestimonialTitle

