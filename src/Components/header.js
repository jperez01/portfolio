import React from 'react';
import { Link } from 'gatsby';

/**
 * Header that contains links to the different parts of the site
 */
export default function Header() {

    return (
        <div className="header">
            <Link className="header-link" to='/'>Home</Link>
            <Link className="header-link" to='/about'>About</Link>
            <Link className="header-link" to='/projects'>Projects</Link>
        </div>
    );
}