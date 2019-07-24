import React, {Component} from 'react'
import "./Contacts.css"
import data from "./randomUsers.json"
import Contact from "./Contact"

class Contacts extends Component {
  render() {
    return (
      <div>
        {data.map(person => (
          <Contact 
            image={person.picture.large}
            fullname={`${person.name.first} ${person.name.last}`} 
            email={person.email}
            tel={person.cell}
            location={person.location.city}
          />
        ))}
      </div>
    )
  }
}

export default Contacts