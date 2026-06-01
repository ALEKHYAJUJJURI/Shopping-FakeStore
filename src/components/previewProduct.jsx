
import axios from "axios"
import { useEffect, useState } from "react"
import {  useParams } from "react-router-dom"


export function PreviewProduct(){
    let params = useParams()
    const [product,setProduct] = useState([])
    const[cartItems] = []
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then(res=>{
            setProduct(res.data)
            console.log(res.data)
        })
    },[params.id])
    function handleCartItems(){
        alert('added')
        cartItems.push(product)
        
        console.log(cartItems)
    }
    return(
        <div className="container-fluid">
           <div className="row">
           <div className="col-4">
            <img src={product.image} width={'200px'} alt="prod"/>
           </div>
           <div className="col-8">
            <h4>{product.title}</h4>
            <p className="bi bi-tag-fill text-secondary">{product.description}</p>
            <p className="price">Price: <span>${product.price}</span></p>
            <button className="btn btn-warning" onClick={handleCartItems}>Add To Cart</button>           
           </div>

           </div>
        </div>
    )
}