import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const ResetPasswordButton = () => {

let navigate = useNavigate();
    const [email, setemail] = useState('')
     const resetPasswordLink=(e)=>{
         e.preventDefault();
         var data={
             email:email
         }
         axios.post("http://localhost:3001/forgotPassword",data).then(res=>{
             console.log(res.data.data)
           
         })
         .catch(err=>{
             console.log(err)
         })
        alert("Please Check Your EmailId")
        navigate('/')
     
      }
    //  const reset =()=>{
    //    navigate('/')
    //  }
  return (
    
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
                <form onSubmit={resetPasswordLink}>
                  {/* <div className="d-flex align-items-center mb-3 pb-1">
                  <i class="fa-solid fa-calendar-check" style={{color: '#ff6219' }} />
                    <span className="h1 fw-bold mb-0">ToDo</span>
                  </div> */}
                  <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: 2}}>Reset Password</h5>
                  <div className="form-outline mb-4">
                    <input type="email" id="form2Example17" className="form-control form-control-lg" placeholder='Enter Your Email address' onChange={(e)=>{setemail(e.target.value)}}/>
                    <label className="form-label" htmlFor="form2Example17"></label>
                  </div>
                  {/* <div className="form-outline mb-4">
                    <input type="password" id="form2Example27" className="form-control form-control-lg" placeholder='Password' onChange={(e)=>{setpassword(e.target.value)}}/>
                    <label className="form-label" htmlFor="form2Example27"></label>
                  </div> */}
                  <div className="pt-1 mb-4">{
                   email ? <button className="btn btn-dark btn-lg btn-block" type="submit" >Send Email Link</button> :<button className="btn btn-dark btn-lg btn-block" type="submit" disabled >Send Email Link</button>
                  }
                    {/* <ToastContainer
position="top-right"
  autoClose={1800}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>  */}
                  </div>
                  {/* <Link className="small text-muted" to="/forgotPassword">Forgot password?</Link>
                  <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <Link to="/signup" style={{color: '#393f81'}}>Register here</Link></p> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
                }