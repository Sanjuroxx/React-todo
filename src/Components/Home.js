import React from 'react'
import {Navbar} from './Navbar'
import {About} from './About'
import {Service} from './Service'
import { Body } from './Body'
import { Footer } from './Footer'
import { BacktoTop } from './BacktoTop'
import { Spinner } from './Spinner';
export const Home = () => {
  return (
   <React.Fragment>
     {/* <Navbar/> */}
     <Body/>
     <About/>
     <Service/>
     <Footer/>
     <BacktoTop/>
     <Spinner/>
   </React.Fragment>
  )
}
