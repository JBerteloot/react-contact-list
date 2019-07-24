import React, {Component} from "react"

class Contact extends Component {
  render() {
    return (
      <div className="contactLink">
        <img src={this.props.image}></img>
        <div className="name">{this.props.fullname}</div>
        <div>{this.props.email}</div>
        <div>{this.props.tel}</div>
        <div>{this.props.location}</div>
      </div>
    )
  }
}

export default Contact