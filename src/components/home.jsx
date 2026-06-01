import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ImageCarousel } from 'react-carousel-image';
export function Home(){
    let images = [`${process.env.PUBLIC_URL}/ele.jpg`,`${process.env.PUBLIC_URL}/img-2.jpg`,`${process.env.PUBLIC_URL}/img-3.jpg`,`${process.env.PUBLIC_URL}/img-4.jpg`]
    const [categories,setCategories] = useState([])
    const[products,setProducts] = useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/categories')
        .then(res=>{
            setCategories(res.data)
            console.log(res.data)
        })
        axios.get('https://fakestoreapi.com/products')
        .then(res=>{
            setProducts(res.data)
        })
    },[])
    return(
        <div className="container-fluid" style={{'height':'100vh'}}>
            <div className='' style={{'height':'200px'}}> 
       <ImageCarousel style='ImageCarousel'
      images={images}
      showArrowButtons={true}
      showIndicators={true}
      autoplay={true}
      autoplayInterval={3000}
      infiniteLoop={true}
      /></div>
        <div className="p-2 d-flex justify-content-between">
            <div>
                <select className="form-select">
                    {
                        categories.map(item=><option key={item} value={item} style={{'color':'gray'}}>{item.toUpperCase()}</option>)
                    }
                </select>
            </div>
            <div>
                <button className="btn btn-danger">Sign Out</button>
            </div>
        </div>
        <div className="d-flex flex-row justify-content-center flex-wrap overflow-auto" style={{'height':'500px'}}>
                    {
                        products.map(product=>
                            <div className="card m-3" style={{'width':'250px'}} key={product.id}>
                                <div className="card-header">
                                <h4>{product.title}</h4>    
                                </div>
                                <div className="card-body">
                                <img src={product.image} width={'100px'}/>
                                </div>
                                <div className="card-footer">
                                    <p className="price">Price: <span>{product.price.toLocaleString("en-us", {style: "currency", currency: "USD"})}</span></p>
                                    <p className="text-light "><span className="bg-success rounded p-1">{product.rating.rate}<span className="bi bi-star-fill ms-1"></span><span className="bi bi-star-fill"></span><span className="bi bi-star-fill"></span><span className="bi bi-star-fill"></span><span className="bi bi-star-half"></span></span><span className="text-dark">[{product.rating.count}]</span></p>
                                    <Link to={`/product/${product.id}`} className="btn btn-warning bi bi-eye"></Link>
                                    <button className="btn btn-warning bi bi-cart-fill mx-2">Add To Cart</button>
                                </div>
                             </div>   
                        )
                    }
        </div>
        </div>
    )
}