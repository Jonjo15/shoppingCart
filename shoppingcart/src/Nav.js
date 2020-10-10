import React from "react"
import {NavLink, Link} from "react-router-dom"
function Nav(props) {
    return(
    <div className="navbar">
        <nav>
            <Link to="/"><h1 className="title">Shoppi</h1>
                </Link>
            <ul>
                
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/shop">Shop</NavLink></li>
                <Link to="/shop"><span className="redCircle">{props.numItems}</span></Link>
            </ul>
        </nav>
    </div>
    )
}

export default Nav