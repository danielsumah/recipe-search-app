import React from 'react';

const Nav =() =>(
    
    <nav class="navbar fixed-top navbar-dark bg-dark" style={{maxWidth:"100vw"}}>

        <ul className="nav justify-content-center">
            <li className="nav-item">
            <a className="nav-link disabled">Recipe Search App</a>
            </li>
            <li className="nav-item">
            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">   by Daniel Sumah</a>
            </li>
        </ul>
    </nav>
)


export default Nav;