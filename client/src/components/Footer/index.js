import React from 'react';

import { AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Footer() {
    return(
        <section class="footer">
            <div class="footer-instructions">
                <p>Click the icons below to visit my personal pages</p>
            </div>
            <div class="footer-section-links">
                <a href="www.google.com" target="_blank">< AiFillLinkedin class="icon" id="linkedin-icon"/></a>
            </div>
            <div class="footer-instructions">
                <Link to="/">Click Here To Return To Homepage</Link>
            </div>
        </section>
    )
};

export default Footer;