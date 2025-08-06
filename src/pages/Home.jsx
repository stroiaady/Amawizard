
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Welcome to Amawizard</h1>
    <p>Discover top kitchen gadgets with real reviews.</p>
    <Link to="/category/kitchen">Browse Kitchen Gadgets</Link>
  </div>
);

export default Home;
