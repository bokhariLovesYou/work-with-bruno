import React from 'react'
import { Link } from 'gatsby'
import './style.scss';
import Button from '../Button.js'
import ContentBox from '../ContentBox.js'
import Img from 'gatsby-image'

class Card extends React.Component {
  render() {
    return (
        		<ContentBox customClass="custom-card-wrapper">
              <div className="custom-card">
                <Img fluid={this.props.imageSrc} className={this.props.imageClass}/>
                <div className="content-wrapper">
                  <h3>{this.props.title}</h3>
                  <p className="sub-title">{this.props.content}</p>
                </div>
              </div>
        		</ContentBox>
    )
  }
}

export default Card

