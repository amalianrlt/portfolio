import React from 'react';
import Burger from './Burger';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="nav">
      <div className="logo">
        <Link to="/"><h1>An</h1></Link>
      </div>
      <Burger />
    </header>
  )
}

export default Navbar