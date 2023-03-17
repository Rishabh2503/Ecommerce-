import React from "react";
import { FaEnvelope, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import "./Footer.scss";
import Payment from "../../assets/payments.png"
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
        <div className="col">
        <div className="title">About</div>
        <div className="text">dwebjkfwejfbjwkj wkfbkjebwkjfbwe kjbwefbwejwkjfwje kwejfbjwebfkjew
        kwejfjwekjbwf ewkjbfjkwbfjkwb jkwefbjkwebfkewj
        ewjbejbwe kwjbfjkbwe kjewbfwbekfbwe</div>    
        </div>

        <div className="col">
        <div className="title">Contact</div>
        <div className="c-item">
            <FaLocationArrow />
            <div className="text">kereree eer eererer ,eererer,ererere,ereree ,ererer</div>
        </div>
        <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 2345234523</div>
        </div>
        <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: gmail@.com</div>
        </div>
        </div>
        <div className="col">
        <div className="title">Categories</div>
        <span className="text">Headphone</span>
        <span className="text">Smart watches</span>
        <span className="text">Bluetooth speaker</span>
        <span className="text">wireless end</span>
        <span className="text">Projector</span>
        
        </div>
        <div className="col">
        <div className="title">Pages</div>
        <span className="text">Home</span>
        <span className="text">About</span>
        <span className="text">Privacy Policy</span>
        <span className="text">Returns</span>
        <span className="text">Terms & Condition</span>
        </div>
        
        </div>
        <div className="bottom-bar">
        <div className="bottom-bar-content">
            <div className="text">
            sdfdewfr eferfer efe efefefef efefefef
            
            </div>
            <img src={Payment} alt="paytum" />
        </div>

        </div>
    </footer>;
};

export default Footer;
