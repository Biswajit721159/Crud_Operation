import React, { useState,useEffect ,useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Navbar() {



return (
    <>
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent mx-6">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"> 
                   <Link className="nav-link active" aria-current="page" to="/" style={{ color:'green' }}><h4>Home</h4></Link>
                </li>
            </ul>
         </div>
          <div className="d-flex-col-lg-7"> 
            <Link to={'addstudent'}><button className="btn btn-info mx-2">+addstudent</button></Link>
          </div>
        </div>
      </nav>
    </>
  );
}