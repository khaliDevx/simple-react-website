import React from "react"
import { NavLink , Link } from "react-router-dom"
const Navs = () => {
    return(
        <div className="navbar">
            <div className="container">
                <Link to="/" className="logo">Logo</Link>
                <ul>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/photos">Photos</NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Navs