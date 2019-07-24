import React, { Component } from "react"
import data from "./randomUsers.json"
import {Link} from "react-router-dom"
import "./ContactPage.css"
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

class ContactPage extends Component {
  state = {
    image: "",
    name: "",
    email: "",
    tel: "",
    location: "",
  }

  getContact = (id) => {
    const c = data.find(person => id  == person.id) 

    this.setState({
      image: c.picture.large,
      name: c.name.first + " " + c.name.last,
      email: c.email,
      tel: c.cell,
      location: c.location.city
    })
  }

  componentDidMount() {
    this.getContact(this.props.match.params.id)
  }

  render() {
    return (
      <div className="contactPage">
        <div>
          <Link to="/">Back</Link>
            <div className="profile">
              <p className="pic"><img src={this.state.image}/></p>
              <p className="Nom">{this.state.name}</p>
              <p>{this.state.email}</p>
              <p>{this.state.tel}</p>
              <p className="city">{this.state.location}</p>
            </div>
        </div>
      </div>
    )
  }
}

export default ContactPage