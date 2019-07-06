import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss';
import Button from '../Button.js'
import ContentBox from '../ContentBox.js'
import Img from 'gatsby-image'


class LargeHeroCenteredCTAH2 extends React.Component {
  render() {
    return (
          <div className="large-hero-centered-cta text-left text-lg-center">
        		<ContentBox customClass="equip-width">
        			<h2>{this.props.title}</h2>
        			<p className="sub-title paragraphXS">{this.props.paragraphXS}</p>
              <p className="sub-title paragraphXSAbove">{this.props.paragraphXSAbove}</p>
        		</ContentBox>
            <ContentBox customClass="second">
              <Img fluid={this.props.imageSrc} />
            </ContentBox>
          </div>
    )
  }
}

export default LargeHeroCenteredCTAH2

