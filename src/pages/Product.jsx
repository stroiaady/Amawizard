
import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();
  const affiliateTag = 'adis25-21';
  const productLinks = {
    '1': {
      name: 'Electric Can Opener',
      link: `https://www.amazon.co.uk/dp/B00EXAMPLE1?tag=${affiliateTag}`
    },
    '2': {
      name: 'Smart Kettle',
      link: `https://www.amazon.co.uk/dp/B00EXAMPLE2?tag=${affiliateTag}`
    }
  };
  const product = productLinks[id];

  return product ? (
    <div style={{ padding: '2rem' }}>
      <h2>{product.name}</h2>
      <p>Read our review and buy below:</p>
      <a href={product.link} target="_blank">Buy on Amazon</a>
    </div>
  ) : <p>Product not found</p>;
};

export default Product;
