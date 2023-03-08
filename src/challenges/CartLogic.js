import { useEffect } from "react";
import { useReducer } from "react";
import { useState } from "react"
import axios from "../../node_modules/axios/index";

export default function CartLogic(){
   const [products, setProducts] = useState([]);
   const [cart, setCart] = useState([]);
   const [updateCart, setUpdateCart] = useState(true);
  


  

    
   const getProducts = async () => {
       const {data} = await axios.get("https://fakestoreapi.com/products?limit=4");
       setProducts(data);
       console.log(data);
   }

   const addToCart = (product) => {
       const cartItems = JSON.parse(localStorage.getItem("cartItems"));
       localStorage.setItem("cartItems", JSON.stringify([...cartItems, product ]));
       getCartItems();
   }

   const getCartItems = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    setCart(cartItems);
   }


   useEffect(() =>{
      getProducts();
      getCartItems();
   },[])



    return <>
    <div className="cart-products">
        {products.map(product => {
            return <div className="cart-product" key={product.id}>
            <img src={product.image} alt="" />
            <div className="cart-product-title">{product.title}</div>
            <div className="cart-product-price">{product.price}</div>
            <div>
            <button onClick={() => addToCart(product)}  className="btn btn-primary">Add To Cart</button>
           
            </div>
           
        </div>
        })}
    </div>
    <hr />
    <h2 className="text-center">CART</h2>
    <hr />
    <div className="cart-products">
        {cart.map(product => {
            return <div className="cart-product" key={product.id}>
            <img src={product.image} alt="" />
            <div className="cart-product-title">{product.title}</div>
            <div className="cart-product-price">{product.price}</div>
           
            <button     className="btn btn-danger">Remove</button>
        </div>
        })}
    </div>
    </>
}