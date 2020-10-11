import React from "react"

function Item(props) {
    // const [quantity, setQuantity] = useState(0)
    function handleIncreaseButton(e) {
        let prevProducts = props.products.slice(0)
        if(prevProducts[props.data.id].quantity < 10) {
            prevProducts[props.data.id].quantity += 1;
        props.setProducts(prevProducts)
        props.setNumItems(props.numItems +1)
        }
        
        // setQuantity(quantity + 1)
    }
    function handleDecreaseButton(e) {
        if (props.numItems > 0 && props.data.quantity > 0) {
            let prevProducts = props.products.slice(0)
            prevProducts[props.data.id].quantity -= 1
            props.setProducts(prevProducts)
            props.setNumItems(props.numItems - 1)
        } 
    }
    // useEffect(() => {
    //     if(props.products.all(ele => ele.quantity === 0)) {

    //     }
    // }, [props.products])
    function handleChange(e) {
        if (e.target.value > 10) {
            alert("Must be less than 11")
            return
        }
        let prevProducts = props.products.slice(0)
        const prevQuantity = props.data.quantity
        prevProducts[props.data.id].quantity = +e.target.value
        // const prevQuantity = quantity
        // setQuantity(+e.target.value)
        
        const diff = +e.target.value - prevQuantity;
        props.setNumItems(props.numItems + diff)
    }
    return (<div>
        <p>{props.data.name}</p>
        <img className="itemImg" alt={props.data.name} src={props.data.img} />
        <p>${props.data.price}</p>
        <button onClick={handleIncreaseButton}>+</button>
        {/* <input value={quantity} type="number" min="0" onChange={(e) => {
             setQuantity(e.target.value)
             props.setNumItems(props.numItems )
     }}/> */}
     <input value={props.data.quantity} type="number" min="0" max="10" onChange={handleChange}/>
        <button onClick={handleDecreaseButton}>-</button>
    </div>)
}

export default Item