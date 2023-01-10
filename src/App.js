import React from "react";

import { BrowserRouter as Router, Route,Link,Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import Footer from "./Footer";
import { AiFillHome } from "react-icons/ai";
import { AiFillPhone} from "react-icons/ai";



function App() {
  return (
    
        <div className="App">
          <Router>
              <Navbar>
                <div className="content"> 
                  <Link to="/">Home</Link>
                  <Link to="/Contact">Contact</Link>
                </div>  
              </Navbar> 
            <Routes>       
                <Route path="/home" element={<Home/>}>
                </Route> 
                <Route path="/contact" element={<Contact/>}>
                </Route> 
            </Routes>
              <Footer>
                <div className="content"> 
                  <Link to="/">Home</Link>
                  <Link to="/Contact">Contact</Link>
                </div>  
              </Footer>
          </Router>
        </div>
  );
}

export default App;
