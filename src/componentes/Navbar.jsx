import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/'>Cotizar</Link>
      <Link to='/historial'>Historial</Link>
    </nav>
  );
};

export default Navbar;

