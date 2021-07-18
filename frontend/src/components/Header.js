import React from "react";
export default function Header() {
  return (
    <div className="">
      <nav className="navbar" role="navigation">
        <a className="nav-item navbar-brand" href="/">
          <h2>SLV</h2>
        </a>
        <div className="nav-item">
          <button
            style={{ border: "none", background: "transparent" }}
            data-toggle="collapse"
            data-target="#menuBox"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </nav>
      <div>
        <div className="collapse" id="menuBox">
          <div className="">
            <ul className="nav nav-fill">
              <li className="nav-item col-xs-3">
                <a className="" href="/book-slot">
                  Book a slot
                </a>
              </li>
              <li className="nav-item col-xs-3">
                <a className="" href="/admin/slots">
                  View bookings
                </a>
              </li>
              <li className="nav-item col-xs-3">
                <a className="" href="/admin/slots/new">
                  Create slots
                </a>
              </li>
              <li className="nav-item col-xs-3">
                <a href="/" className="">
                  Signout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
