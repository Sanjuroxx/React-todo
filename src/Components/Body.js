import React from 'react'
import { Link } from 'react-router-dom'

export const Body = () => {
  return (
    <div>
      <section id="hero">
  <div className="hero-container">
    <div data-aos="fade-in">
      <div className="hero-logo">
        <img className src="assets\img\logo1.jpg" alt="Imperial" />
      </div>
      <h1>Welcome to ToDo App</h1>
      <h2>Complete Your Task Befor Deadline <span className="typed" data-typed-items="beautiful graphics, functional websites, working mobile apps" /></h2>
      <div className="actions">
        <Link to="/signup" className="btn-get-started">Get Strated</Link>
        <Link  to="/service" className="btn-services">Our Services</Link>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
