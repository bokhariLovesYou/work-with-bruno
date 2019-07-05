import React from 'react'
import ContentBox from './ContentBox.js'


class TextContent extends React.Component {
  render() {
    return (
          <div className="text-content">
            <ContentBox customClass={this.props.customClass}>
              <p className="sub-title">{this.props.content}</p>
            </ContentBox>
          </div>
    )
  }
}

export default TextContent

