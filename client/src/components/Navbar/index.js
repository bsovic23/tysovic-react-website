import React from 'react';

import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <section class="navbar">
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li>ABOUT</li>
                <li>CLASSES</li>
                <li><Link to="/work">WORK EXPERIENCE</Link></li>
            </ul>
        </section>
    )
};

export default Navbar;