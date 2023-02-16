import React from 'react';

import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <section class="navbar">
            <ul>
                <li><Link to="/" style={{ color: 'black', textDecoration: 'none'}}>HOME</Link></li>
                <li>ABOUT</li>
                <li><Link to="/skills" style={{ color: 'black', textDecoration: 'none'}}>SKILLS</Link></li>
                <li><Link to="/work" style={{ color: 'black', textDecoration: 'none'}}>WORK EXPERIENCE</Link></li>
            </ul>
        </section>
    )
};

export default Navbar;