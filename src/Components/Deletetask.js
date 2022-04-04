import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

  // import { useNavigate } from 'react-router-dom';


export const Deletetask = () => {
  let Navigate = useNavigate();
    var id=useParams().id;
    console.log(id)
    const delete1=()=>{
        axios.delete(`http://localhost:3001/tasks/${id}`,Deletetask).then(res=>{
          toast.info('🦄 Task Deleted!', {
            
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
    useEffect(()=>{
        delete1()
    },[])
  return (
    <div>
<ToastContainer
autoClose={1800}/>
    </div>
  )
}
