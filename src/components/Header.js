import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

  return (
    <div className="container">
      <div className="py-5 text-center">
        <NavLink className="btn btn-outline-primary mr-2" to="/" exact>Home</NavLink>
      </div>
    </div>
  )
}

export default Header;