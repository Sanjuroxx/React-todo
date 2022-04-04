import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    // <div>
    <header id="header" className="d-flex align-items-center">
  <div className="container d-flex align-items-center justify-content-between">
    <a href="" className="logo mr-auto"><img src="assets\img\large.png" alt /></a>
    {/* Uncomment below if you prefer to use a text logo */}
    {/* <h1 class="logo mr-auto"><a href="index.html"   >Imperial</a></h1> */}
    <nav id="navbar" className="navbar">
      <ul>
        <li><Link className="nav-link scrollto active" to="/">Home</Link></li>
        <li><Link className="nav-link scrollto" to="/about">About</Link></li>
        <li><Link className="nav-link scrollto" to="/service">Services</Link></li>
        <li><Link className="nav-link scrollto" to="/task">List Task</Link></li>
        <li><Link className="nav-link scrollto" to="/addtask">Add Task</Link></li>
        <li><Link className="nav-link scrollto" to="/signin">Signin</Link></li>
        <li><Link className="nav-link scrollto" to="/signup">Signup</Link></li>
        <li><Link className="nav-link scrollto " to="/logout">Logout</Link></li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle" />
    </nav>{/* .navbar */}
  </div>
</header>



    // </div>
  )
}
