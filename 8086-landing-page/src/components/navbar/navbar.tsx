import React,{useState} from 'react'

import './navbar.scss';
import logo from '../../assets/logo.png';


import {RiMenu3Line, RiCloseLine} from 'react-icons/all'
const Menu = () => {
    return <>
                    <p> <a href="#home">Home</a></p>
                    <p><a href="#wgp3">What is GPT?</a></p>
                    <p><a href="#possibility">Open AI</a></p>
                    <p><a href="#features">Features</a></p>
                    <p><a href="#blog">Blog</a> </p>
    </>
}

const Navbar = () => {
    const [toggleMenu,setToggleMenu] = useState(false);

    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="" />
                </div>
                <div className="gpt3__navbar-links_container">
                    <Menu/>
               </div>
            </div>
            <div className="gpt3__navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign Up</button>
            </div>
            <div className="gpt3__navbar-menu">
                {toggleMenu ?
                 <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>:
                <RiMenu3Line color="#fff" size={23} onClick={() => setToggleMenu(true)}/> }

                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                        <Menu/>
                        </div>
                        <div className="gpt3__navbar-menu_container-links-sign">
                            <p>Sign In</p>
                            <button>Sign Up</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
  