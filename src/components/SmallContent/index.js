import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss';
import LinkCta from '../LinkCta.js'
import ContentBox from '../ContentBox.js'


class SmallContent extends React.Component {
  render() {
    return (
          <div className="small-content">
            <ContentBox customClass={this.props.customClass}>
              <h5 className="dim">{this.props.dimText}</h5>
              <h2>{this.props.title}</h2>
              <p className="sub-title">{this.props.paragraph}</p>
              <LinkCta title="Request Early Access" />
            </ContentBox>
          </div>
    )
  }
}

export default SmallContent

