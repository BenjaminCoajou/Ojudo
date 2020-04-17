import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

import './style.scss';

const Footer = () => (
    <footer>
        <div className="sponsors">
        <Link to="/sponsors" >
            <h2 className="sponsors__title">Sponsors</h2>
        </Link>
            <div className="sponsors__div-sponsors">
                <a className="sponsors__sponsor" href="#"><img className="img-fluid" src="https://img.icons8.com/officel/100/000000/facebook.png" /></a>
                <a className="sponsors__sponsor" href="#"><img className="img-fluid" src="https://img.icons8.com/officel/100/000000/facebook.png" /></a>
                <a className="sponsors__sponsor" href="#"><img className="img-fluid" src="https://img.icons8.com/officel/100/000000/facebook.png" /></a>
            </div>
            </div>
        <div className="networks">
            <div className="networks__div-icons">
                <a className="networks__icon" href="#">{<FaFacebookSquare />}</a>
                <a className="networks__icon" href="#">{<FaTwitterSquare />}</a>
                <a className="networks__icon" href="#">{<FaInstagram />}</a>
                <Link to="/contact" className="networks__icon">{<MdEmail />}</Link>
            </div>
            <div className="networks__div-links">
                <a href="#">Mentions Légales</a>
            </div>
        </div>
    </footer>
);

export default Footer;