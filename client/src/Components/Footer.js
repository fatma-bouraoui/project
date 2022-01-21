import React from 'react'
import './Footer.css';
function Footer() {
    return (
      <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      {/*FOOTER*/}
      <footer>
        <div className="top_header">
          <section>
            <span><i className="fa fa-map-marker" /></span>
            <span>Street, full address, state/province, country, pincode</span>
          </section>
          <section>
            <span><i className="fa fa-phone" /></span>
            <span>(00) 0000 0000</span>
          </section>
          <section>
            <span><i className="fa fa-envelope" /></span>
            <span>info@websitename.com</span>
          </section>
        </div>
        <span className="border-shape" />
        <div className="bottom_content">
          <section>
            <a href="#"><i className="fa fa-facebook" /></a>
            <a href="#"><i className="fa fa-instagram" /></a>
            <a href="#"><i className="fa fa-twitter" /></a>
            <a href="#"><i className="fa fa-telegram" /></a>
          </section>
         
        </div>
        <div className="copyright">
          Copyright © 2021 websitename - All rights reserved 
        </div>
      </footer>
    </div>
    
    
    )
}

export default Footer
