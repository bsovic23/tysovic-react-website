import React from 'react';

import { AiFillLinkedin } from 'react-icons/ai';

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
                <a href="#header">Click here to return to the top of the page</a>
            </div>
        </section>
    )
};

export default Footer;