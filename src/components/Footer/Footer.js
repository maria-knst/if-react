import React from 'react'

import './Footer.scss'

import footerLogo from '../../images/svg/logo_vector-respons.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container col-12">
        <img src={footerLogo} alt="logo" className="foot-logo-respons" />
        <div className="foot-groups">
          <div className="foot-element col-4">
            <h4 className="foot-title">About</h4>
            <ul className="foot-list">
              <a href="#">How Triphouse works</a>
              <a href="#">Careers</a>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </ul>
          </div>

          <div className="foot-element foot-grow-element col-4">
            <h4 className="foot-title">Property types</h4>
            <ul className="foot-list">
              <a href="#">Guest houses</a>
              <a href="#">Hotels</a>
              <a href="#">Apartments</a>
              <a href="#">Villas</a>
              <a href="#">Holiday homes</a>
              <a href="#">Hostels</a>
            </ul>
          </div>

          <div className="foot-element col-4">
            <h4 className="foot-title">Support</h4>
            <ul className="foot-list">
              <a href="#">Contact Customer Service</a>
              <a href="#">FAQ</a>
            </ul>
          </div>
        </div>

        <h4 className="foot-text">
          &copy;2020 Triphouse, Inc. All rights reserved
        </h4>
      </div>
    </footer>
  )
}

export default Footer
