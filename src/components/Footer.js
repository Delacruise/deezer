import React from 'react';

const copyRight = () => {
  const cYear = (new Date().getFullYear())
  return cYear;
}

const Footer = () => {

  return (
    <div className="container-fluid footer">
      <div>
        <a href="/" title="Deezer">
          <img className="footerLogo" src="../../assets/images/deezer-logo.png" />
        </a>
      </div>      
      <div className="copyRight">© {copyRight()} Deezer</div>
    </div>
  )
}

export default Footer;