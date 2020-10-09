import React from "react"

function Item(props) {
    return (<div>
        <p>{props.data.name}</p>
        <p>{props.data.price}</p>
        <button onClick={() => props.setNumItems(props.numItems + 1)}>+</button>
        <input type="number" min="0" />
        <button onClick={() => { if(props.numItems > 0) {
            props.setNumItems(props.numItems - 1)
        } }}>-</button>
    </div>)
}

export default Item