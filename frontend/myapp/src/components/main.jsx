import React, { useState } from "react";
import axios from "axios";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import { Link } from 'react-router-dom';
import Home from "./home";
import About from "./about";
import Laptops from "./laptops";
import Privacy from "./privacy";
import Faq from "./faq";
import Disclaimer from "./disclamer";
import EwasteDisposal from "./ewaste";
import AirBudsPage from "./airbuds";
import Phones from "./phones";
import Refridgerator from "./refridgerator";
import Tvs from "./tvs";
import Laptop_details from "./laptop1";
import PhoneDetail from "./phonedetails";
import TVDetail from "./tvdetail";
import AirbudsDetail from "./airbuddetail";
import RefrigeratorDetails from "./refridgeratordetail";
import Login from "./login";
import Register from "./register";
import CartPage from "./cartpage";
import Cookies from "js-cookie";
import gg from './gg.png'
import ChatBot from "./chatbot";
import RecentOrders from "./recentorders";
function Main(){
  const[email,setEmail]=useState("")
  const [isChatOpen, setIsChatOpen] = useState(false); 

    const username = Cookies.get("username");
    const handleLogout = () => {
      Cookies.remove("username");
      
      window.location.reload();
    
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:5000/send-email',{email});
        console.log('Response:', response.data);
        alert('We will contact you soon!');
      } catch (error) {
        console.error('Error:', error);
        alert('Ohoooo! Something got wrong.');
      }
    };
    const toggleChat = () => {
      setIsChatOpen(!isChatOpen); // Toggle chat modal visibility
    };
    return(
        <>
        <Router>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        {/* Logo and Brand */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src={gg} style={{ height: "70px", width: "70px" }} alt="Logo" />
          <p style={{ marginTop: "10px", color: "white", marginLeft: "10px" }}>GADGET GROOVE</p>
        </Link>

        {/* Navbar Toggler for small screens */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link"  to="/">HOME</Link>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">GADGETS</a>
              <ul className="dropdown-menu" >
                <li><Link to="/laptops" className="dropdown-item" style={{fontWeight:'bold'}}>LAPTOPS</Link></li>
                <li><Link to="/airbuds" className="dropdown-item" style={{fontWeight:'bold'}}>AIRBUDS</Link></li>
                <li><Link to="/tvs" className="dropdown-item" style={{fontWeight:'bold'}}>TELEVISION</Link></li>
                <li><Link to="/refridgerators" className="dropdown-item" style={{fontWeight:'bold'}}>REFRIDGERATOR</Link></li>
                <li><Link to="/phone" className="dropdown-item" style={{fontWeight:'bold'}}>PHONES</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/recent">Recent orders</Link>
            </li> */}
            <li className="nav-item">
            <button className="nav-link" onClick={toggleChat}>
          Chat
        </button>
            </li>

            {username ? (
              <>
                
                  <li className="nav-item"><Link className="nav-link" to="/recent">Hi,{username}</Link></li>
                
                <li className="nav-item">
                  <button className="nav-link" onClick={handleLogout}>
                    LOGOUT
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item" id="login-btn">
                <Link className="nav-link btn btn-primary text-white" to="/login">LOGIN</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>        

        <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="laptops" element={<Laptops/>}/>
            <Route path='privacy' element={<Privacy/>}/>
            <Route path='faq' element={<Faq/>}/>
            <Route path='disclamer' element={<Disclaimer/>}/>
            <Route path='ewaste' element={<EwasteDisposal/>}/>
            <Route path='airbuds' element={<AirBudsPage/>}/>
            <Route path='phone' element={<Phones/>}/>
            <Route path='refridgerators' element={<Refridgerator/>}/>
            <Route path='tvs' element={<Tvs/>}/>
            <Route path='/laptop-details/:id' element={<Laptop_details/>}/>
            <Route path='/phone-details/:id' element={<PhoneDetail/>}/>
            <Route path='/tv-details/:id' element={<TVDetail/>}/>
            <Route path='/airbuds-details/:id' element={<AirbudsDetail/>}/>
            <Route path='/refridgerator-details/:id' element={<RefrigeratorDetails/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path="cart" element={<CartPage />}/>
            <Route path="recent" element={<RecentOrders />}/>
            <Route path="chat" element={<ChatBot />}/>
            


            
        </Routes>
        
        
        {isChatOpen && (
                    <div className="chat-modal">
                        <ChatBot onClose={() => setIsChatOpen(false)} />
                    </div>
                )}
             
<div id="contactus" style={{ color: 'whitesmoke', padding: '2% 5%' }}>
<h1 className="cormorant-fon text-center">CONTACT US</h1>
  <div className="row">
    {/* First Column - Connect with us */}
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4" style={{ padding: '5%' }}>
      <p>CONNECT WITH US</p>
      <input
        type="text"
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        placeholder="Enter Email"
        className="form-control mb-2"
        style={{ borderRadius: '5px' }}
      />
      <input
        type="submit"
        className="btn btn-primary" onClick={handleSubmit}
        style={{ borderRadius: '5px', width: '100%' }}
      />
      <br />
      <br />
      <p>&copy; Copyright 2024 GadgetGroove. All rights reserved</p>
    </div>

    {/* Second Column - Links */}
    <div
      className="col-lg-4 col-md-6 col-sm-12 mb-4"
      style={{ padding: '5%', borderLeft: 'solid white 1px' }}
    >
      <ul className="list-unstyled">
        <li id="lis">
          <Link to="/privacy" style={{ color: 'white', textDecoration: 'none' }}>
            PRIVACY POLICY
          </Link>
        </li>
        <li id="lis">
          <Link to="/faq" style={{ color: 'white', textDecoration: 'none' }}>
            FAQ'S
          </Link>
        </li>
        <li id="lis">
          <Link to="/disclamer" style={{ color: 'white', textDecoration: 'none' }}>
            DISCLAIMER
          </Link>
        </li>
        <li id="lis">
          <Link to="/ewaste" style={{ color: 'white', textDecoration: 'none' }}>
            E-WASTE
          </Link>
        </li>
      </ul>
    </div>

    {/* Third Column - More Links */}
    <div
      className="col-lg-4 col-md-12 col-sm-12"
      style={{ padding: '5%', borderLeft: 'solid white 1px' }}
    >
      <ul className="list-unstyled">
        <li id="lis">
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            HOME
          </Link>
        </li>
        <li id="lis">
          <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>
            ABOUT US
          </Link>
        </li>
      </ul>
    </div>
  </div>
</div>

        </Router>
        
        </>
    )
}

export default Main