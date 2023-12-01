import React, { useState } from 'react';
import menus from './menu.json';
import './header.css';
import Logo from '../../assets/belixlogo.png';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(null);

    const handleSubMenuClick = (menuId) => {
        setOpenMenu(openMenu === menuId ? null : menuId);
    };

    const menuItems = menus.map((menu) => {
        const hasSubMenu = menu.submenu && menu.submenu.length > 0;

        const subMenu = hasSubMenu ? (
            <ul className={`submenu ${openMenu === menu.id ? 'active' : ''}`}>
                {menu.submenu.map((submenuItem) => (
                    <li key={submenuItem.id}>
                        <a href={submenuItem.link}>{submenuItem.nombre}</a>
                    </li>
                ))}
            </ul>
        ) : null;

        return (
            <li key={menu.id}>
                <a
                    href={menu.link}
                    // onClick={(e) => {
                    //     e.preventDefault();
                    //     handleSubMenuClick(menu.id);
                    // }}
                >
                    {menu.nombre}
                </a>
                {subMenu}
            </li>
        );
    });

    return (
        <header>
            <div className="logo">
                <img src={Logo} alt="Logo" />
                <h1>Belix Total Fitness</h1>
            </div>
            <nav>
                <ul className="navLinks">
                    {menuItems}
                </ul>
            </nav>
        </header>
    );
};

export default Header;