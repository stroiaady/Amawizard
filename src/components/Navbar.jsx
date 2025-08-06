
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '1rem', background: '#222', color: '#fff' }}>
    <Link to="/" style={{ marginRight: '1rem', color: '#fff' }}>Home</Link>
    <Link to="/category/kitchen" style={{ color: '#fff' }}>Kitchen Gadgets</Link>
  </nav>
);

export default Navbar;
