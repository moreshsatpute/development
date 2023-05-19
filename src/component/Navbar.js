import { Link } from "react-router-dom";
import React from 'react';
import './NavbarStyle.css';
import { MdKeyboardArrowDown } from 'react-icons/md';


const Navbar = () => {
  return (
    <div className="header ">
        <Link to="/">
            <h2>Logo</h2>
        </Link>
        <ul className="nav-menu">
            <li>
                <Link to="/"></Link>
            </li>
            <li>
                <Link className="arrow" to="/aboutus" >ABOUTUS<i ><MdKeyboardArrowDown/></i></Link>
            </li>
            <li>
                <Link className="arrow" to="/service">SERVICES <i><MdKeyboardArrowDown/></i></Link>
            </li>
            <li>
                <Link className="arrow" to="/product">PRODUCTS<i><MdKeyboardArrowDown/></i></Link>
            </li>
            <li>
                <Link to="/news">NEWS</Link>
            </li>
            <li>
                <Link to="/contact">CONTACT</Link>
            </li>
        </ul>

    </div>
  )
}

export default Navbar