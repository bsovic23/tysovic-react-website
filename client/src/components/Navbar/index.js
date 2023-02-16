import React from 'react';

import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <section class="navbar">
            <ul>
                <li><Link to="/" style={{ color: 'black', textDecoration: 'none'}}>HOME</Link></li>
                <li><Link to="/about" style={{ color: 'black', textDecoration: 'none'}}>ABOUT ME</Link></li>
                <li><Link to="/skills" style={{ color: 'black', textDecoration: 'none'}}>SKILLS</Link></li>
                <li><Link to="/work" style={{ color: 'black', textDecoration: 'none'}}>WORK EXPERIENCE</Link></li>
                <li><Link to="/resume" style={{ color: 'black', textDecoration: 'none'}}>RESUME</Link></li>
            </ul>
        </section>
    )
};

export default Navbar;