import React from "react";
import { useState,useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

const Product = () =>{

    const [products, getProducts] = useState([]);
    useEffect(()=>{
       fetch('https://fakestoreapi.com/products')
       .then(data => data.json())
       .then(result => getProducts(result))
    },[]);


    //just used the boot strap inbuild cards here is the card code link
    // https://react-bootstrap.github.io/docs/components/cards
    const  cards = products.map(product => (
        <div className="col-md-3">
             <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
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