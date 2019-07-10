import React from 'react'
import { Link } from 'gatsby'
import './style.scss';
import ContentBox from '../ContentBox.js'
import Img from 'gatsby-image'


class BlogCard extends React.Component {
  render() {
    return (
          <Link className="blog-card-anchor-wrapper" to={this.props.link}>
            <div className="blog-card">
              <ContentBox customClass={this.props.customClass}>
                <div className="blog-card-wrapper">
                  <Img fluid={this.props.imageSrc} />
                  <div className="excerpt text-inverted">
                    <h2>{this.props.title}</h2>
                    <Link to={this.props.link}> Read more ›</Link>
                  </div>
                </div>
              </ContentBox>
            </div>
          </Link>
    )
  }
}

export default BlogCard

