
import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: '1', name: 'Electric Can Opener' },
  { id: '2', name: 'Smart Kettle' },
];

const Category = () => (
  <div style={{ padding: '2rem' }}>
    <h2>Kitchen Gadgets</h2>
    {products.map(product => (
      <div key={product.id}>
        <Link to={`/product/${product.id}`}>{product.name}</Link>
      </div>
    ))}
  </div>
);

export default Category;
