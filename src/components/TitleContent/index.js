import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss';
import ContentBox from '../ContentBox.js'


class TitleContent extends React.Component {
  render() {
    return (
          <div className="title-content-cta">
            <ContentBox customClass={this.props.customClass}>
              <h1>{this.props.title}</h1>
              <p className="sub-title">{this.props.paragraph}</p>
            </ContentBox>
          </div>
    )
  }
}

export default TitleContent

