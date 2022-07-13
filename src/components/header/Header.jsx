import React from "react";
import './Header.css'
import logo from '../../assets/images/Vector-logo.svg'

const Header = ({ setCurrency }) => {
    return (
        <header className="Header">
            <img src={logo} alt='logo' />
            <select className="HeaderSelect" onChange={(e) => setCurrency(e.target.value)}>
                <option>GBP</option>
                <option>USD</option>
                <option>RUB</option>
            </select>
        </header >
    )
}

export default Header;