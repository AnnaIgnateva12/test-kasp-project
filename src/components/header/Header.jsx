import React from "react";
import './Header.css'
import logo from '../../assets/images/Vector-logo.svg'

const Header = () => {
    return (
        <header>
            <img src={logo} alt='logo' />
            <select>
                <option>GBP</option>
                <option>USD</option>
                <option>RUB</option>
            </select>
        </header >
    )
}

export default Header;