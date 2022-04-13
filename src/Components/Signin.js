import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Signin = () => {
    const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  let Navigate=useNavigate();

  const login=async(e)=>{
    e.preventDefault();
var data={
  email:email,
  password:password,
  
}
    await axios.post("http://localhost:3001/login",data).then(res=>{
  if(res.data.status===200){
    localStorage.setItem('firstName',res.data.data.firstName)
    localStorage.setItem('email',res.data.data.email)
    localStorage.setItem('role',res.data.data.role.roleName)
    localStorage.setItem('_id',res.data.data._id)
    localStorage.setItem('isLoggedIn',true)

    toast(res.data.msg)
    setTimeout(() => {
      Navigate('/')
    }, 2000);
  }
  else{ 
    //new  
    
    setTimeout(() => {
      
    }, 2000);
    toast(res.data.msg)
  }
    })
  }
  return ( 
    <div>
<section className="vh-100" style={{backgroundColor: '#FFFFFF'}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{borderRadius: '1rem'}}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src="assets\img\95536242-vector-die-karikaturillustation-des-mannes-arbeitend-an-laptop-computer-am-tisch-geschäftsmann-oder--removebg-preview.png" alt="login form" className="img-fluid" style={{borderRadius: '1rem 0 0 1rem'}} />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">
                <form onSubmit={login}>
                  {/* <div className="d-flex align-items-center mb-3 pb-1">
                  <i class="fa-solid fa-calendar-check" style={{color: '#ff6219' }} />
                    <span className="h1 fw-bold mb-0">ToDo</span>
                  </div> */}
                  <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: 2}}>Sign into your account</h5>
                  <div className="form-outline mb-4">
                    <input type="email" id="form2Example17" className="form-control form-control-lg" placeholder='Email address' onChange={(e)=>{setemail(e.target.value)}}/>
                    <label className="form-label" htmlFor="form2Example17"></label>
                  </div>
                  <div className="form-outline mb-4">
                    <input type="password" id="form2Example27" className="form-control form-control-lg" placeholder='Password' onChange={(e)=>{setpassword(e.target.value)}}/>
                    <label className="form-label" htmlFor="form2Example27"></label>
                  </div>
                  <div className="pt-1 mb-4">{
                   email && password ? <button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>  :<button className="btn btn-dark btn-lg btn-block" type="submit" disabled>Login</button>
                   } <ToastContainer
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
                  </div>
                  <Link className="small " to="/forgotPassword" style={{color: '#FF0000'}}>Forgot password?</Link>
                  <p className="mb-5 pb-lg-2"style={{color: '#393f81'}}>Don't have an account? <Link to="/signup" style={{color: '#393f81'}}>Register here</Link></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
  )
}
