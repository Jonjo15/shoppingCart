import React from "react"

function Checkout(props) {
    let element;
    props.numItems === 0 ? element= <h5>Shopping Cart is empty</h5> : element= <h4>Shopping Items:</h4>
    return(<div>
        <h4>Shopping Cart:</h4>
        {element}
        <button>Check Out</button>
    </div>)
}

export default Checkout