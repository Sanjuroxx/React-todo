import React, { useEffect ,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Logoutuser = () => {
    // localStorage.clear();
    localStorage.removeItem('email')
        localStorage.removeItem('password')
        localStorage.removeItem('firstName')
    let navigate = useNavigate();

    
    toast('Logout')
    setTimeout(() => {
      navigate('/signin ')
    },100);
  return (
    <div>
     <ToastContainer/> 
    </div>
  )
}
