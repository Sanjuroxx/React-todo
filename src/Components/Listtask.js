import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export const Listtask = () => {
    const [tasklist, settasklist] = useState([])
    
    const gettask=()=>{
        axios.get('http://localhost:3001/tasks').then(res=>{
            console.log(res.data.data)
            settasklist(res.data.data)
        })
        
    }
    useEffect(()=>{
        gettask();
    },[])
  return (
    <div>
<table class="table">
  <thead class="thead-light">
    <tr>
      {/* <th scope="col"></th> */}
      <th scope="col">TaskName</th>
      <th scope="col">Description</th>
      <th scope="col">Time</th>
      <th scope="col">Priority</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>
  <tbody>
      {
          tasklist.map((task)=>{
              return(
                <tr>
                {/* <th scope="row">1</th> */}
                <td>{task.TaskName}</td>
                <td>{task.Description}</td>
                <td>{task.Time}</td>
                <td>{task.Priority}</td>
                <td>
                    <Link to={`/table/Update/${task._id}`} className="btn btn-primary">UPDATE</Link>
                    <Link to={`/table/Delete/${task._id}`} className="btn btn-danger">DELETE</Link>
                    
                </td>
              </tr>
              )
          })
      }
    

  </tbody>
</table>
    </div>
  )
}
