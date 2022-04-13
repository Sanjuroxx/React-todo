import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link, Navigate} from 'react-router-dom'

import { useNavigate } from 'react-router-dom';




export const Addtask = () => {
 
        const [TaskName, setTaskName] = useState('')
        const [Description, setDescription] = useState('')
        const [Time, setTime] = useState('')
        const [Priority, setPriority] = useState('')
        // const [, setsubject] = useState('6244443a29312c4ecc04197b')
        const [author, setauthor] = useState(localStorage.getItem('_id'))
        var auth= localStorage.getItem('email')
    

      let Navigate=useNavigate()
     useEffect(() => {
    if(!auth){
        Navigate("/signin")
    }
     }, [])
     
    
    const submit=(e)=>{
        e.preventDefault()
        var data={
            TaskName:TaskName,
            Description:Description,
            Time:Time,
            Priority:Priority,
            author:author

        }


  
        axios.post("http://localhost:3001/tasks",data).then(res=>{
            // alert("Task Adedd.....")
            console.log(res.data.data)

            toast.success('🦄 Task Addedd!', {
              position: "top-center",
                autoClose: 700,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              
                });
                setTimeout(() => {
                Navigate('/task')
              }, 2000);
            
        })
 

       
    }

  return (
    <div className='task'>
<section className="vh-100 bg-image">
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRadius: 15}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Add Your Task</h2>
              <form onSubmit={submit}>
                <div className="form-outline mb-4">
                  <input type="text" id="form3Example1cg" className="form-control form-control-lg" placeholder='Enter Task Name'  onChange={(e)=>{setTaskName(e.target.value)}} />
                  {/* <label className="form-label" htmlFor="form3Example1cg">Y Name</label> */}
                </div>
                <div className="form-outline mb-4">
                  <input type="text" id="form3Example3cg" className="form-control form-control-lg" placeholder='Enter Task Description' onChange={(e)=>{setDescription(e.target.value)}}/>
                  {/* <label className="form-label" htmlFor="form3Example3cg">Your Email</label> */}
                </div>
                <div className="form-outline mb-4">
                  <input type="text" id="form3Example4cg" className="form-control form-control-lg"placeholder='Enter Task Completion Time'onChange={(e)=>{setTime(e.target.value)}} />
                  {/* <label className="form-label" htmlFor="form3Example4cg">Password</label> */}
                </div>
                <div className="form-outline mb-4">
                  <input type="text" id="form3Example4cdg" className="form-control form-control-lg"placeholder='Enter Task Priority' onChange={(e)=>{setPriority(e.target.value)}}/>
                  {/* <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label> */}
                </div>
               
                <div className="d-flex justify-content-center">{
                 TaskName && Description && Time && Priority ? <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" >Add Task</button> : <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" disabled>Add Task</button>
                }
                  <ToastContainer/>
                </div>
                 {/* <button type="submit" className="fw-bold text-body">Add Task</button       > */}
              </form>
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
