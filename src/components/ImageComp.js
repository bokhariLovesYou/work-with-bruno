import React from 'react'
import ContentBox from './ContentBox.js'
import Img from 'gatsby-image'


class ImageComp extends React.Component {
  render() {
    return (
    	<ContentBox customClass={this.props.customClass}>
    		<Img fluid={this.props.imageSrc} className={this.props.imageClass}/>
    	</ContentBox>
    )
  }
}

export default ImageComp

