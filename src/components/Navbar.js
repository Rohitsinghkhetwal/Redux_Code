import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Navbar = () => {
  const items = useSelector((state) => state.cart)
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      <span className='logo'>REDUX STORE</span>
      <div>
      <Link className="navLink" to = "/">Home</Link>
      <Link className = "navLink" to ="cart">Cart</Link>
      </div>
      <span>Cart item: {items.length}</span>
      

    </div>
  )
}

export default Navbar