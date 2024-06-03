import React from 'react';
import Product from './Product'; // Import the Product component

const Products = () => {
  return (
    <div>
      <h2>Our Products</h2>
      <p>Check out our latest commercial furniture collection.</p>
      {/* Display Product components */}
      <Product
        image="../images/Running_shoe.jpg" 
        price="$200M"
        color="Black"
        manufacturer="Manifacture World"
      />
      <Product
        image="../images/Women_dress.jpg" 
        price="$180"
        color="Black"
        manufacturer="Modern dress"
      />
      <Product
        image="..images/Tesla_Car.jpg" 
        price="$3000M"
        color="White"
        manufacturer="Modern manifacturing"
      />
      {/* Adding default products */}
      <Product />
      <Product manufacturer="Retro Designs" />
      <Product price="$200" />
    </div>
  );
}

export default Products;
