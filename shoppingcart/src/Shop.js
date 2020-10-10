import React from "react"
import Checkout from "./Checkout"
import Item from "./Item"

function Shop(props) {
    const shoppingItems = props.products.map(element=> <Item key={element.id} numItems={props.numItems} setNumItems={props.setNumItems} data={element}/>)
    return(<div className="shopPage">
        <div className="shoppingItems">{shoppingItems}</div>
        <Checkout />
        <h3>{props.numItems}</h3>
    </div>)
}

export default Shop    