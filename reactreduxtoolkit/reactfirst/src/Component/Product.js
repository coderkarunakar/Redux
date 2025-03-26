import React from "react";
import { useState,useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
const Product = () =>{

    const dispatch = useDispatch();

    const [products, getProducts] = useState([]);
    useEffect(()=>{
       fetch('https://fakestoreapi.com/products')
       .then(data => data.json())
       .then(result => getProducts(result))
    },[]);

const addToCart = (product) =>{
    //dispatch an add action,we just need to tell which action you want to dispatch
    dispatch(add(product))

}
    //just used the boot strap inbuild cards here is the card code link
    // https://react-bootstrap.github.io/docs/components/cards
    const  cards = products.map(product => (
        <div className="col-md-3" style={{marginbottom:'10px'}}>
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