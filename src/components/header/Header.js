import React, {Component} from 'react';
import Nav from '../nav/Nav.js';
import './Header.css';
import {Link} from 'react-router-dom';


class Header extends Component {

    blinkCursor(){

    }
    render() {
        return (
            <header className="headerBlock">
                <Link className="headerBlock__name" id="homeLink" to="/"></Link>
                <Nav/>
            </header>
        );
    }
}

export default Header;