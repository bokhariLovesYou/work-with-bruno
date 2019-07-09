import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss';
import LinkCta from '../LinkCta.js'
import ContentBox from '../ContentBox.js'


class TitleContentCTAH2 extends React.Component {
  render() {
    return (
          <div className="title-content-cta">
            <ContentBox customClass={this.props.customClass}>
              <h2>{this.props.title}</h2>
              <p className="sub-title">{this.props.paragraph}</p>
              <LinkCta title="Request Early Access" />
            </ContentBox>
          </div>
    )
  }
}

export default TitleContentCTAH2

