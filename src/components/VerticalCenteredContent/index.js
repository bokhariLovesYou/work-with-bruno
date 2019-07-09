import React from 'react'
import { Link } from 'gatsby'
import './style.scss';
import Button from '../Button.js'
import ContentBox from '../ContentBox.js'

class VerticalCenteredContent extends React.Component {
  render() {
    return (
        		<ContentBox customClass="vertical-centered-content">
              <div>
        			<h1>{this.props.title}</h1>
        			<p className="sub-title paragraphXS">{this.props.paragraphXS}</p>
              <Link to={this.props.buttonLink}><Button
                extraClass="mt-2"
                title={this.props.buttonTitle}
              /></Link>
              </div>
        		</ContentBox>
    )
  }
}

export default VerticalCenteredContent

