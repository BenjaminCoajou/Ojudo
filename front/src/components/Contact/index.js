import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

import './style.css';

const Contact = () => (
    <div>
        <Header />
        <section id="contact">
  <h1 className="section-header">CONTACT</h1>
  <div className="contact-wrapper">
    {/*-------------- 

CONTACT PAGE LEFT 
    
---------------*/} 
    <form className="form-horizontal" role="form" method="post" action="contact.php">
      <div className="form-group">
        <div className="col-sm-12">
          <input type="text" className="form-control" id="name" placeholder="NAME" name="name" defaultValue={""}  />
        </div>
      </div>
      <div className="form-group">
        <div className="col-sm-12">
          <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" defaultValue={""}  />
        </div>
      </div>
      <textarea className="form-control" rows={10} placeholder="MESSAGE" name="message" defaultValue={""} />
      <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
        <div className="button">
          <i className="fa fa-paper-plane" /><span className="send-text">SEND</span>
        </div>
      </button>
    </form>
    {/*-------------- 

CONTACT PAGE RIGHT 
    
---------------*/} 
    <div className="direct-contact-container">
      <ul className="contact-list">
        <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Seattle | WA</span></i></li>
        <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></i></li>
        <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">emailme@gmail.com</a></span></i></li>
      </ul>
      <hr />
      <ul className="social-media-list">
        <li><a href="#" target="_blank" className="contact-icon">
            <i className="fa fa-github" aria-hidden="true" /></a>
        </li>
        <li><a href="#" target="_blank" className="contact-icon">
            <i className="fa fa-twitter" aria-hidden="true" /></a>
        </li>
        <li><a href="#" target="_blank" className="contact-icon">
            <i className="fa fa-instagram" aria-hidden="true" /></a>
        </li>
        <li><a href="#" target="_blank" className="contact-icon">
            <i className="fa fa-codepen" aria-hidden="true" /></a>
        </li>
      </ul>

    </div>
  </div>
</section>

<Footer/>
    </div>
);

export default Contact;