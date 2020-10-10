import React from "react"

function Checkout(props) {
    let element;
    let sum = 0;
    let quantityPrice;
    quantityPrice = props.data.map(ele => ele.quantity > 0 ? (<div className="checkOutItems" key={ele.id}>
        <p>{ele.name}</p>
        <p>${ele.price}</p>
        <p>Quantity: {ele.quantity}</p>
    </div>): null)
    props.data.forEach(element => {
        sum += element.quantity * element.price
    });
    props.numItems === 0 ? element= <h5>Shopping Cart is empty</h5> : element= (<div><h2>products:</h2></div>)
    return(<div className="shoppingCart">
        <h4>Shopping Cart:</h4>
        {element}
        <div className="checkOutContainer">{quantityPrice}</div>
        <h4>Cost: ${sum}</h4>
        <button>Check Out</button>
    </div>)
}

export default Checkout