import React from 'react';
import Products from './Products'


const Home = () => {
  return (
    <div>
      <h2 className='heading'>Welcome to Redux store</h2>
      <section>
        <h2>Products</h2>
        <Products/>
      </section>
    </div>
  )
}

export default Home