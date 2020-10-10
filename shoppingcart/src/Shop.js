import React from "react"
import Checkout from "./Checkout"
import Item from "./Item"

function Shop(props) {
    const shoppingItems = props.products.map(element=> <Item key={element.id} products={props.products} setProducts={props.setProducts} numItems={props.numItems} setNumItems={props.setNumItems} data={element}/>)
    return(<div className="shopPage">
        <div className="shoppingItems">{shoppingItems}</div>
        <Checkout numItems={props.numItems} data={props.products} />
    </div>)
}

export default Shop    