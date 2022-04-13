import { Dropdown } from 'bootstrap'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';


export const Navbar = () => {
  let navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    // alert("logout")
    toast('Logout')
    setTimeout(() => {
      navigate('/')
    }, 2000);

  }

  return (
    // <div>
    <header id="header" className="d-flex align-items-center ">
      <div className="container d-flex align-items-center justify-content-between">
        <Link to="/signup">
          <img  className='img'src="..\assets\img\2022-04-12__2_-removebg.png" />
        </Link>
        {/* Uncomment below if you prefer to use a text logo */}
        {/* <h1 class="logo mr-auto"><a href="index.html"   >Imperial</a></h1> */}
        <nav className="navbar ">
          <ul className=' my-element'>
            <li><Link className="nav-link scrollto " to="/">Home</Link></li>
            <li><Link className="nav-link scrollto " to="/about">About</Link></li>
            <li><Link className="nav-link scrollto " to="/service">Services</Link></li>

            {localStorage.getItem('isLoggedIn') != null ? <>
            <li class="dropdown " ><a href="#"><span>Task</span> <i class="bi bi-chevron-down"></i></a>
              <ul>
                <li><Link to="/task">List Task</Link></li>
                <li><Link to="/addtask">Add Task</Link></li>
              </ul>
            </li>
            </> :<> </>}

          </ul>

          {localStorage.getItem('isLoggedIn') === null ? <>
          <div>
            <Link className="nav-link scrollto my-element" to="/signin">Signin</Link>
          </div>
            <div>
              <Link className="nav-link scrollto my-element" to="/signup">Signup</Link>
            </div>
          </> :<>
           <div>
              <Link className="nav-link scrollto  " to='/' onClick={logout} >Logout</Link>
          </div>
          <Link to={`/profile/${localStorage.getItem('_id')}`}>    
          <div className='icon '>
          <i class="fa fa-user" aria-hidden="true"></i>
          {/* {localStorage.getItem('firstName')}    */}
          </div>            
          </Link></>}
          <ToastContainer
            position="top-center"
            autoClose={1800}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>{/* .navbar */}
      </div>
    </header>



    // </div> 
  )
}
