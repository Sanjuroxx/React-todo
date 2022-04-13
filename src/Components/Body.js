import React from 'react'
import { Link } from 'react-router-dom'

export const Body = () => {
  return (
    <div>
      <section id="hero">
  <div className="hero-container">
    <div className='body'>
      <div className="hero-logo" >
        {/* <img className src="assets\img\logo1.jpg" alt="Imperial" /> */}
      
        <h1 ><span className='size'> Hey !! Welcome to <span className='colorchange'>To Do APP</span></span></h1>
      <h2 className='h2'> <> Are You  Forgot to Complete Your Work ? </></h2>
      {/* </h2><h2 className='help'> Then We are here to help You!! </h2><h3>Complete Your Task Befor Deadline </h3> */}
      {/* <span class="typed-cursor" aria-hidden="true">|</span> */}
     </div>
      <div className="actions">
        <Link to="/signup" className="btn-1">Get Strated</Link>
        <Link  to="/service" className="btn-2 ">Our Services</Link>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
