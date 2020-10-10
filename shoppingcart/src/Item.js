import React, {useState} from "react"

function Item(props) {
    const [quantity, setQuantity] = useState(0)
    function handleIncreaseButton(e) {
        props.setNumItems(props.numItems +1)
        setQuantity(quantity + 1)
    }
    function handleDecreaseButton(e) {
        if (props.numItems > 0 && quantity > 0) {
            props.setNumItems(props.numItems - 1)
            setQuantity(quantity - 1)
        } 
    }
    function handleChange(e) {
        const prevQuantity = quantity
        setQuantity(+e.target.value)
        
        const diff = +e.target.value - prevQuantity;
        props.setNumItems(props.numItems + diff)
    }
    return (<div>
        <p>{props.data.name}</p>
        <p>{props.data.price}</p>
        <button onClick={handleIncreaseButton}>+</button>
        {/* <input value={quantity} type="number" min="0" onChange={(e) => {
             setQuantity(e.target.value)
             props.setNumItems(props.numItems )
     }}/> */}
     <input value={quantity} type="number" min="0" onChange={handleChange}/>
        <button onClick={handleDecreaseButton}>-</button>
    </div>)
}

export default Item