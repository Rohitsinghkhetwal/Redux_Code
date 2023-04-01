import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import {remove} from '../Store/Slicer'

const Cart = () => {
  const items = useSelector(state => state.cart);
  
  const del = useDispatch();

  const handleDelete = (stuff) => {
    console.log("hey i am under the water pls help me");
    del(remove(stuff));


  }
  return (
    <div>
        <h3>Cart</h3>
        <div className='cartWrapper'>
         {
          items.map(product => (
            <div className='cartCard'>

              <img src={product.image} alt=''/>
              <h5>{product.title}</h5>
              <h5>{product.price}</h5>
              <button className='btn' onClick={() => handleDelete(product.id)}>Remove</button>

            </div>
          ))
         }
        </div>
    </div>
  )
}

export default Cart