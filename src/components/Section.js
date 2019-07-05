import React from "react"

class Section extends React.Component {
  render() {
    const { children } = this.props
    return (
      <section
        id={"section-" + this.props.count}
        className={"section " + this.props.customClass}
      >
        {children}
      </section>
    )
  }
}

export default Section
