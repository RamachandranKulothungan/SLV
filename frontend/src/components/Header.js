import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  
export default function Header(){
  const[menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick=()=>{
    setMenuOpen(p=>!p)
  }
    return(
        <div className="navbar">
          <Link className="" to="/" position='top'>
            SLV
          </Link>
          <div className="" id="">
            <i className="fas fa-bars" onClick={handleMenuClick}/>
            {
              menuOpen? 
                <div className="card">
                  <ul className=""   >
                    <li className="">
                      <Link className="" to="/book-slot">
                        Book a slot
                      </Link>
                    </li>
                    <li className="">
                      <Link className="" to="/admin/slots">
                        View bookings
                      </Link>
                    </li>
                    <li className="">
                      <Link className="" to="/admin/slots/new">
                        Create slots
                      </Link>
                    </li>
                    <li>
                        <a href="/" className="">
                            Signout
                        </a>
                    </li>
                  </ul>
                </div>
                :
                <></>    
            }
          </div>
        </div>
    )
}