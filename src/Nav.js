import React, {Component} from "react"
import data from "./randomUsers.json"
import {Link} from "react-router-dom"
import Contact from "./Contact"

class Nav extends Component {
  render() {
    return (
      <nav>
        <span>
          <p>My contacts</p>
        </span>
        <ul className="contacts">
          {data.map(person => (
            <li className="contactLink" key={person.id}>
              <Link to={"/contact/" + person.id}>
                <Contact 
                  image={person.picture.thumbnail} 
                  fullname={person.name.first + " " + person.name.last}
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}

export default Nav