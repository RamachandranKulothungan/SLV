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
        <div className="header" style={{border: '3px black'}}>
          <Link className="" to="/">
            SLV
          </Link>
          <div className="" id="" style={{position: 'relative', left: '85%', width: '15%'}}>
            <i className="fas fa-bars" style={{position: 'relative', left: '90%'}} onClick={handleMenuClick}/>
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