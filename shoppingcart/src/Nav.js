import React from "react"

function Nav(props) {
    return(
    <div className="navbar">
        <nav>
            <p className="title">Shop</p>
            <ul>
                
                <li><a href="/">Home</a></li>
                <li><a href="/shop">Shop</a></li>
            </ul>
        </nav>
    </div>
    )
}

export default Nav