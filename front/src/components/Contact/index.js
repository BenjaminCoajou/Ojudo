import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa";
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
    <form className="form-horizontal" role="form" method="post" action="ContactController.php">
      <div className="form-group">
        <div className="col-sm-12">
          <input type="text" className="form-control" id="name" placeholder="Votre titre" name="name" defaultValue={""}  />
        </div>
      </div>
      <div className="form-group">
        <div className="col-sm-12">
          <input type="email" className="form-control" id="email" placeholder="Votre email" name="email" defaultValue={""}  />
        </div>
      </div>
      <textarea className="form-control" rows={10} placeholder="Votre message " name="conntent" defaultValue={""} />
      <button className="btn_footer send-button" id="submit" type="submit" value="SEND">
        <div className="button">
          <i className="fa fa-paper-plane"></i><span className="send-text">Envoyer</span>
        </div>
      </button>
    </form>
    {/*-------------- 

CONTACT PAGE RIGHT 
    
---------------*/} 
    <div className="direct-contact-container">
      <ul className="contact-list">
        <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">O'judo<br/>25 rue d'oclock, 95000 Paris.</span></i></li>
        <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">02-02-02-02-02</a></span></i></li>
        <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:ojudo.club@gmail.com" title="Send me an email">ojudo.club@gmail.com</a></span></i></li>
      </ul>
      <hr />
      <ul className="social-media-list">
        <li><a href="#" target="_blank" className="contact-icon">
        <i className="fab fa-facebook-f facebook"></i></a>
        </li>
        <li><a href="#" target="_blank" className="contact-icon">
        <i className="fab fa-instagram instagram"></i></a>
        </li>
        <li><a href="#" target="_blank" className="contact-icon">
        <i className="fab fa-twitter twitter"></i></a>
        </li>
      </ul>

    </div>
  </div>
</section>

<Footer/>
    </div>
);

export default Contact;