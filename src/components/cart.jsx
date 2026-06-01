import { useState } from "react"

export function CartProducts(){
    const [items,setItems] = useState([])
    
    
    return(
        <div>
            <h2>Cart Items</h2>
            <div>
Your Cart items will be shown  here
            </div>
        </div>
    )
}