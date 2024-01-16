import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar=()=>{
 
    return(
        <nav className="ui raised very padded segments" style={{padding:"20px"}}>
            <a href="/" className="ui teal inverted segment">Nav</a>
            <div className="ui right floated header">
                <button className="ui button" ><Link to="/home">Home</Link></button>
                <button className="ui button" ><NavLink to="/about">About</NavLink></button>
                <button className="ui button" ><NavLink to="/contacts">Contacts</NavLink></button>
            </div>
        </nav>
    )
}
export default Navbar;
