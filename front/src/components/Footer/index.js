import React from 'react';

import './style.scss';

const Footer = () => (
<footer>   
    <div className="sponsors">
    <h2 className="sponsors__title">Sponsors</h2>
        <div className="sponsors__div-sponsors">
            <div className="sponsors__sponsor"><a href=""><img src="https://img.icons8.com/officel/100/000000/facebook.png"/></a></div>
            <div className="sponsors__sponsor"><a href=""><img src="https://img.icons8.com/officel/100/000000/facebook.png"/></a></div>
            <div className="sponsors__sponsor"><a href=""><img src="https://img.icons8.com/officel/100/000000/facebook.png"/></a></div>
        </div>
    </div>
    <div className="networks">
        <div className="networks__div-icons">          
            <div className="networks__icon"><a href=""><img src="https://img.icons8.com/officel/50/000000/facebook.png"/></a></div>
            <div className="networks__icon"><a href=""><img src="https://img.icons8.com/color/50/000000/twitter-squared.png"/></a></div>
            <div className="networks__icon"><a href=""><img src="https://img.icons8.com/color/50/000000/instagram-new.png"/></a></div>
            <div className="networks__icon"><a href=""><img src="https://img.icons8.com/ios-filled/50/000000/important-mail.png"/></a></div>
        </div>
        <div className="networks__div-links">
        <a href="">Mentions Légales</a>
        </div>
    </div>
</footer>     
);

export default Footer;