import React from "react"
import Checkout from "./Checkout"
import Item from "./Item"
import {items} from "./ShoppingItems"
function Shop(props) {
    const shoppingItems = items.map(element=> <Item numItems={props.numItems} setNumItems={props.setNumItems} data={element}/>)
    return(<div className="shopPage">
        <div className="shoppingItems">{shoppingItems}</div>
        <Checkout setNumItems={props.setNumItems} numItems={props.numItems}/>
        <h3>{props.numItems}</h3>
    </div>)
}

export default Shop    