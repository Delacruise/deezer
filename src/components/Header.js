import React from 'react';

const Header = () => {

  return (
    <div className="container-fluid header">
      <div className="row row-cols-2">
        <div className="col">
          <a href="/" title="Deezer">
            <img className="logo" src="../../assets/images/deezer-logo-circle.png" alt="Deezer" />  
          </a>          
        </div>
        <div className="col">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="search" aria-label="search" aria-describedby="input-group-right" />
            <span className="input-group-text" id="input-group-right-example">Search</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;