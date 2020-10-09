import React from "react"
import {NavLink} from "react-router-dom"
function Nav(props) {
    return(
    <div className="navbar">
        <nav>
            <p className="title">Shop</p>
            <ul>
                
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/shop">Shop</NavLink></li>
            </ul>
        </nav>
    </div>
    )
}

export default Nav