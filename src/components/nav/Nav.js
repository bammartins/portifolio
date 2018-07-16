import React, { Component } from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';


class Nav extends Component{

    // constructor(){
    //     super();
    //     // this.autoClose();
    // }

    autoClose(){
        const menuCheck = document.getElementById('menu-hamburguer');
        menuCheck.checked = false;
    }

    render() {
        return(
         <section className="navigatorBlock">
            <input id="menu-hamburguer" type="checkbox"/>

            <label htmlFor="menu-hamburguer">
                <div className="menuBlock">
                    <span className="menuBlock__hamburguer"></span>
                </div>
            </label>
            <ul className="blockList">
                <li onClick={this.autoClose} className="blockList__item"><Link to='/'>Home</Link></li>
                <li onClick={this.autoClose} className="blockList__item"><Link to='/about'>About Me</Link></li>
            </ul>
         </section>
        );  
    }    
}

export default Nav;
