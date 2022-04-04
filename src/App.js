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
import { Logoutuser } from './Components/Logoutuser';

function App() {
  return (
    <div className="App">

      {/* <Body/> */}
      <Navbar/> 
      {/* <Home/> */}

      <Routes>
      <Route path='/' element={<Body/>}/>
        {/* <Route path='/navbar' element={<Navbar/>}/>/ */}
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/logout' element={<Logoutuser/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='Portfolio' element={<Portfolio/>}/>
        <Route path='/service'element={<Service/>}/>
        <Route path='/task'element={<Listtask/>}/>
        <Route path='/addtask' element={<Addtask/>}/>
        <Route path='/table/Update/:id' element={<Updatetask/>}/>
       <Route path='/table/Delete/:id' element={<Deletetask/>}/>
      </Routes>
      {/* <Navbar/> */}
    </div>
  );
}

export default App;
