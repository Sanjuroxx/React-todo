import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Signup = () => { 
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [gender, setgender] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  let navigate=useNavigate();
  const submit=(e)=>{
      e.preventDefault()
      var data={
          firstName:firstName,
          lastName:lastName,
          gender:gender,
          email:email,
          password:password,
          role:"620f10d4de4cea571b5a571a",
          roleName:"User"
      }
      axios.post("http://localhost:3001/users",data).then(res=>{
          // alert("Signup Done!!!")
          toast.success('🦄 Signup done!! Please Login' , {
              position: "top-center",
              autoClose: 500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              });
              setTimeout(() => {
                  navigate('/signin')    
              }, 2000);
       
      })
  }
  return (
    <div>
  <section className="vh-100" style={{backgroundColor: '#eee'}}>
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black" style={{borderRadius: 25}}>
            <div className="card-body p-md-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" >Sign up</p>
                  <form className="mx-1 mx-md-4" onSubmit={submit}>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input type="text" id="form3Example1c" className="form-control" placeholder='Enter First Name' onChange={(e)=>{setfirstName(e.target.value)}} />
                        <label className="form-label" htmlFor="form3Example1c" ></label>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input type="text" id="form3Example1c" className="form-control" placeholder='Enter Last Name' onChange={(e)=>{setlastName(e.target.value)}}/>
                        <label className="form-label" htmlFor="form3Example1c" ></label>
                      </div>
                    </div>
                      {/* {gender.length<=0?"Select Your Gender!":""} */}
                      <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="gender" id="gender" value="female" onChange={(e)=>{setgender(e.target.value)}} />
                                                    <label className="form-check-label" for="gender">Female</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="gender" id="gender" value="male" onChange={(e)=>{setgender(e.target.value)}} />
                                                    <label className="form-check-label" for="gender">Male</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="gender" id="gender" value="other" onChange={(e)=>{setgender(e.target.value)}} />
                                                    <label className="form-check-label" for="gender">Other</label>
                                                </div>
                                                {/* <label htmlFor="gender" className="form-label">Gender :</label> */}
                                            </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input type="email" id="form3Example3c" className="form-control" placeholder='Enter Email' onChange={(e)=>{setemail(e.target.value)}}/>
                        <label className="form-label" htmlFor="form3Example3c"></label>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-lock fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input type="password" id="form3Example4c" className="form-control" placeholder='Enter Password' onChange={(e)=>{setpassword(e.target.value)}} />
                        <label className="form-label" htmlFor="form3Example4c"></label>
                      </div>
                    </div>
                    <p>Already have an account? <Link to="/signin" className="link-info">Click here</Link></p>

                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">{
                      firstName && lastName && email && gender && password ? <button type="submit" className="btn btn-primary btn-lg">Register</button>:<button type="submit" disabled className="btn btn-primary btn-lg">Register</button>
                    }
                      <ToastContainer 
                    autoClose={1800}/>
                    </div>
                   
                  </form>
                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
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
