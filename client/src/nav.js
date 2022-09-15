import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
      <nav>
        <ul>
        <li>
            <Link to="/">Login Page</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav