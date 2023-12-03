import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Navigation,Footer,Home, About, Contact, Blog, Search, List
} from "./components";



ReactDOM.render(
  <Router>
   
      <Navigation/>
 
    
    <Routes>
    <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/blog' element={<Blog/>}/>
 
  <Route path='/search' element={<Search/>}>
   
    <Route path="list" element={<List />}/>
   
   </Route>
 
</Routes>
<Footer />
     </Router>,

     document.getElementById("root")

);
reportWebVitals();
