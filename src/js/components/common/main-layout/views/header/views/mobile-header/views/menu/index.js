import { slide as Menu } from 'react-burger-menu';
import "./styled.css";
import React from 'react';

const MenuComponent = () => {
    return (
        <div>
            <Menu >
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <a className="menu-item--small" href="">Settings</a>
            </Menu>
        </div>
    );
};

export default MenuComponent;