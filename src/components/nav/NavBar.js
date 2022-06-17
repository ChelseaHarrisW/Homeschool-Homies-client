import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
  const history = useHistory()
  return (
    <nav>
      <ul className="navbar">
        <li className="navbar__item">
          <Link to="/">Home</Link>
          <Link className="navbar__link" to="/lessons">
            Lessons
          </Link>
          <Link className="navbar__link" to="/teachers">
            Our Teachers
          </Link>
        </li>
      </ul>
      {
        localStorage.getItem("auth_token") !== null ?
          <button onClick={() => {
            localStorage.removeItem("auth_token")
            history.push({ pathname: "/" })
          }}>
            Logout
          </button>
          :
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
      }
    </nav>
  )
}
