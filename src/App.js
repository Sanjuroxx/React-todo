import logo from './logo.svg';
import './App.css';
import { Body } from './Components/Body';
import { Navbar } from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Signup } from './Components/Signup';
import { About } from './Components/About';
import { Portfolio } from './Components/Portfolio';
import { Service } from './Components/Service';
import { Home } from './Components/Home';
import { Signin } from './Components/Signin';
import { Listtask } from './Components/Listtask';
import { Addtask } from './Components/Addtask';
import {Updatetask} from './Components/Updatetask';
import {Deletetask} from './Components/Deletetask';
// import { Logoutuser } from './Components/Logoutuser';
import { ResetPasswordButton } from './Components/ResetPasswordButton';
import { ResetPassword } from './Components/ResetPassword';
import { UserProfile } from './Components/UserProfile';
import { Footer } from './Components/Footer';
import { Spinner } from 'react-spinner';

function App() {
  return (
    <div className="App">
{/* <Spinner/> */}
      {/* <Body/> */}
      <Navbar/> 
      {/* <Home/> */}

      <Routes>
      {/* <Route path='/' element={<Body/>}/> */}
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='Portfolio' element={<Portfolio/>}/>
        <Route path='/service'element={<Service/>}/>
        <Route path='/task'element={<Listtask/>}/>
        <Route path='/addtask' element={<Addtask/>}/>
        <Route path='/table/Update/:id' element={<Updatetask/>}/>
       <Route path='/table/Delete/:id' element={<Deletetask/>}/>
       <Route path='/forgotPassword' element={<ResetPasswordButton/>}/>
       <Route path='/reset/:token' element={<ResetPassword/>}/>
       <Route path='/profile/:_id' element={<UserProfile/>}/>
      </Routes>
      {/* <Footer/> */}    
    </div>
  );
}

export default App;
