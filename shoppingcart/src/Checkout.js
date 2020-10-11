import React from "react"
// import {items} from "./ShoppingItems"
function Checkout(props) {
    let element;
    let sum = 0;
    let quantityPrice;
    quantityPrice = props.data.map(ele => ele.quantity > 0 ? (<div className="checkOutItems" key={ele.id}>
        <p>{ele.name}</p>
        <p>Price: {ele.price}</p>
        <p>Quantity: {ele.quantity}</p>
        <p>Cost: ${ele.price * ele.quantity}</p>
    </div>): null)
    props.data.forEach(element => {
        sum += element.quantity * element.price
    });
    props.numItems === 0 ? element= <h2>Shopping Cart is empty</h2> : element= (<div><h2>Products:</h2></div>)
    return(<div className="shoppingCart">
        <h4>Shopping Cart:</h4>
        {element}
        <div className="checkOutContainer">{quantityPrice}</div>
        <h4>Total Cost: ${sum}</h4>
        {props.numItems > 0 ?<button onClick={(e) => {
            alert("Order received")
            let updatedProds = props.products.slice(0).map(ele => {
                ele.quantity = 0;
                return ele;
            } );
           
            props.setProducts(updatedProds)
            props.setNumItems(0)
        }}>Submit Order</button> : null }
    </div>)
}

export default Checkout