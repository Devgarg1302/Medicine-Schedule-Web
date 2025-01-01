import React from 'react';
import './footer.css';

import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer>
            <div id='footer'></div>
            <div className="footer">
                <div className="row">
                    <a href="#"><FaFacebookSquare className='icon'/></a>
                    <a href="#"><BsInstagram className='icon'/></a>
                    <a href="#"><FaGithub className='icon'/></a>
                    <a href="#"><FaSquareXTwitter className='icon'/></a>
                </div>

                <div className="row">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Notifications</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;