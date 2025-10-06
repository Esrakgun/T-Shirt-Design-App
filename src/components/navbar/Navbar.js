import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-primary'>
      <div className='container'>
        <Link to='/' className='navbar-brand text-white'>Tshirt Design</Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link to='/signup' className='nav-link text-white'>Sign-up</Link>
            </li>
            <li className='nav-item'>
              <Link to='/login' className='nav-link text-white'>Log-in</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



