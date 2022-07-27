import React, { Component } from 'react';
import { Link } from "gatsby";

const NavBar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg">
            <Link className="navbar-brand" to="/">Patricia Acorda</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/about">About</Link>
                    <Link className="nav-item nav-link" to="/projects">Projects</Link>
                    {/* <Link className="nav-item nav-link" to="/designs">Other Work</Link> */}
                </div>
            </div>
        </nav>
    );
};
 
export default NavBar;