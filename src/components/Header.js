import React from 'react';
import { Redirect } from 'react-router';

const Header = () => {

  let textInput = React.createRef();
  const searchFunction = () => { 
    console.log(textInput.current.value);
    var toSearch = textInput.current.value;
    if(textInput.current.value !== '') {
      if(toSearch !== '') {
        window.location.replace("http://localhost:3000/Search/" + toSearch);
      }
    }
  }

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
            <input type="text" ref={textInput} name="search" className="form-control" placeholder="Search Artist..." aria-label="search" aria-describedby="input-group-right" />
            <span onClick={searchFunction} className="input-group-text searchButton" id="searchButton">Search</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;