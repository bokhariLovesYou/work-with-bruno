import React from "react"

class Button extends React.Component {
  render() {
    const { children } = this.props
    return (
      <button type="button" className={'default-button ' + this.props.extraClass}>{this.props.title}</button>
    )
  }
}

export default Button
