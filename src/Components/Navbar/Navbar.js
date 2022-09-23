import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
    const MenuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/team">team</Link></li>n
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contactUs">Contact Us</Link></li>

    </>
    return (
        <div>
            <div className="navbar bg-primary text-white">
                <div className="navbar-start container">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
                            {MenuItems}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl"><h2 className='text-3xl uppercase'>Moderna</h2></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {MenuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;