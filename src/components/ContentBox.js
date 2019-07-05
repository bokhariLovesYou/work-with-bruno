import React from "react"

class ContentBox extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className={'content-box ' + this.props.customClass}>
        {children}
      </div>
    )
  }
}

export default ContentBox
