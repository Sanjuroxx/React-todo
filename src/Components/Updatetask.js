import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//for redirect to another page
import { useNavigate } from 'react-router-dom';


export const Updatetask = () => {
    var id = useParams().id;
    const [data, setdata] = useState('')
    const [TaskName, setTaskName] = useState('')
    const [Description, setDescription] = useState('')
    const [Time, setTime] = useState('')
    const [Priority, setPriority] = useState('')

    let Navigate = useNavigate();

    const gettask=()=>{
        axios.get(`http://localhost:3001/tasks/${id}`).then(res=>{
            setdata(res.data.data)
            console.log(res.data.data)
        })
    }
    useEffect(()=>{
        gettask()
    },[])

    const Update=(e)=>{
        var Updatetask={
            TaskName:TaskName,
            Description:Description,
            Time:Time,
            Priority:Priority

        }
        e.preventDefault()
        
        axios.put(`http://localhost:3001/tasks/${id}`,Updatetask).then(res=>{
        // alert("Task Updated....")
        console.log(res.data.data)

  
        toast.success(' Update Sucessfully!!', {
          position: "top-center",
          autoClose: 500,
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
    <div>
    <section className="vh-100 bg-image">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{borderRadius: 15}}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Update Your Task</h2>
                  <form onSubmit={Update}>
                    <div className="form-outline mb-4">
                      <input type="text" id="form3Example1cg" className="form-control form-control-lg"placeholder='Task Name' defaultValue={data.TaskName}   onChange={(e)=>{setTaskName(e.target.value)}} />
                      {/* <label className="form-label" htmlFor="TaskName" name="TaskName">Task Name</label> */}
                    </div>
                    <div className="form-outline mb-4">
                      <input type="text" id="form3Example3cg" className="form-control form-control-lg"placeholder='Description' defaultValue={data.Description} onChange={(e)=>{setDescription(e.target.value)}}/>
                      {/* <label className="form-label" htmlFor="Description" name="Description">Description</label> */}
                    </div>
                    <div className="form-outline mb-4">
                      <input type="text" id="form3Example4cg" className="form-control form-control-lg"placeholder='Time' defaultValue={data.Time} onChange={(e)=>{setTime(e.target.value)}} />
                      {/* <label className="form-label" htmlFor="Time" name="Time">Time</label> */}
                    </div>
                    <div className="form-outline mb-4">
                      <input type="text" id="form3Example4cdg" className="form-control form-control-lg" placeholder='Priority' defaultValue={data.Priority} onChange={(e)=>{setPriority(e.target.value)}}/>
                      {/* <label className="form-label" htmlFor="Priority" name="Priority">Priority</label> */}
                    </div>
                   
                    <div className="d-flex justify-content-center">{
                     TaskName && Description && Priority && Time ?  <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Update Task</button> :<button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body " disabled>Update Task</button>
                    }<ToastContainer
                        // position="top-center"
                              autoClose={500}
                              // hideProgressBar={false}
                              // newestOnTop={false} 
                              // closeOnClick
                              // rtl={false}
                              //   pauseOnFocusLoss
                              //   draggable
                              //   pauseOnHover
                                  />

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
    
