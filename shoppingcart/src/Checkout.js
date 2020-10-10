import React from "react"

function Checkout(props) {
    let element;
    let sum = 0;
    let quantityPrice;
    quantityPrice = props.data.map(ele => ele.quantity > 0 ? (<div>
        <p>{ele.name}</p>
        <p>{ele.price}</p>
        <p>{ele.quantity}</p>
    </div>): null)
    props.data.forEach(element => {
        sum += element.quantity * element.price
    });
    props.numItems === 0 ? element= <h5>Shopping Cart is empty</h5> : element= (<div><h2>products:</h2></div>)
    return(<div>
        <h4>Shopping Cart:</h4>
        {element}
        {quantityPrice}
        <h4>Cost: {sum}</h4>
        <button>Check Out</button>
    </div>)
}

export default Checkout