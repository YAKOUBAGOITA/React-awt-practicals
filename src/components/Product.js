import React from 'react';

function Product({ image, price, color, manufacturer }) {
  const defaultImage = 'default-image-url.jpg';
  const defaultPrice = 'Price not available';
  const defaultColor = 'Color not available';
  const defaultManufacturer = 'Manufacturer not available';

  return (
    <div className="product">
      {/* Render the image */}
      <img src={image || defaultImage} alt="Product" />

      {/* Render other product details */}
      <p>Price: {price || defaultPrice}</p>
      <p>Color: {color || defaultColor}</p>
      <p>Manufacturer: {manufacturer || defaultManufacturer}</p>
    </div>
  );
}

export default Product;
