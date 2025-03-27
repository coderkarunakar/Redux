import React from "react";
import { useState,useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import { Alert } from "react-bootstrap";
import StatusCode from "../utils/statuscode.js";
const Product = () =>{

    const dispatch = useDispatch();
    //get the data with the help of useselector hook (here product is the thing used inside the productSlice.js)
    const {data : products, status} = useSelector(state => state.products)

    useEffect(()=>{
       //dispatch the action for fetchProducts , i need dispatch method and a thunk creator
        dispatch(getProducts());
    },[]);


    if(status === StatusCode.LOADING){
        return <Alert>Loading...</Alert>
    }
    if(status === StatusCode.ERROR){
        return <Alert key="danger" variant="danger">Something went Wrong</Alert> 
    }
const addToCart = (product) =>{
    //dispatch an add action,we just need to tell which action you want to dispatch
    dispatch(add(product));


}
    //just used the boot strap inbuild cards here is the card code link
    // https://react-bootstrap.github.io/docs/components/cards
    const  cards = products.map(product => (
        <div  key = {product.id}className="col-md-3" style={{marginbottom:'10px'}}>
             <Card key={product.id}  className = "h-100" style={{ width: '18rem' }}>
        
                <div>
                <Card.Img variant="top" src= {product.image} style={{width : '100px', height: '130px'}} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        INR.{product.price}
                    </Card.Text>
                    
                
                </Card.Body>
                <Card.Footer style={{background : 'white'}}>
                <Button variant="primary" onClick={()  => addToCart(product)}>Add to Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ))
    return(
        <>
        <h1>Product DashBoard</h1>
        <div className="row">

            {cards}
        </div>

        </>
    )
}

export default Product;