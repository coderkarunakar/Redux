import { useSelector ,useDispatch} from 'react-redux';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { remove } from '../store/cartSlice';
const Cart =()=>{
    const products = useSelector(state => state.cart);
    const dispatch = useDispatch()
    //ultimatelly we will get this id from the products since see below i am using product and iterating and storing everything there
    const removeToCart = (id) =>{
        //dispatch the remove action
        dispatch(remove(id))
    }
    const  cards = products.map(product => (
        <div className="col-md-12" style={{marginbottom:'10px'}}>
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
                <Button variant="danger" onClick={()=> removeToCart(product.id)}>Remove Item</Button>
                </Card.Footer>
            </Card>
        </div>
    ))
    return(
        <>
         <h1>Cart</h1>
         <div className='row'>

            {cards}
         </div>
        </>
       
    )
}

export default Cart;