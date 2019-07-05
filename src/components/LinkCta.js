import React from "react"
import { Link } from 'gatsby'

class LinkCta extends React.Component {
  render() {
    const { children } = this.props
    return (
      <Link className="link-cta" to="#">{this.props.title} ›</Link>
    )
  }
}

export default LinkCta
