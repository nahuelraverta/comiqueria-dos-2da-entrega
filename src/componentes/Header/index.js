import React from 'react'
import logo from "../../images/ALTERNATIVA.png"
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <Link to='/'>
                <div className='logo'>
                    <img src={logo} alt="logo" width="180" />
                </div>
            </Link>
            
            <ul>
                <li>
                    <Link to='/'>INICIO</Link>
                </li>
                <li><Link to='/Productos'>COMICS</Link></li>
            </ul>
            <div className="cart">
                <box-icon name="cart"></box-icon>
                <span className="item__total">0</span>
            </div>
        </header>)
}
