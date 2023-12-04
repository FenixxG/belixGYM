import React, { useState } from 'react';
import menus from './menu.json';
import './header.css';
import Logo from '../../assets/belixlogo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const [openQueOfrecemosSubMenu, setOpenQueOfrecemosSubMenu] = useState(null);
    const [openProductosSubMenu, setOpenProductosSubMenu] = useState(null);

    const handleQueOfrecemosSubMenuClick = (menuId) => {
        setOpenQueOfrecemosSubMenu(openQueOfrecemosSubMenu === menuId ? null : menuId);
    };

    const handleProductosSubMenuClick = (subMenuId) => {
        setOpenProductosSubMenu(openProductosSubMenu === subMenuId ? null : subMenuId);
    };

    const queOfrecemosSubMenu = menus.find((menu) => menu.id === 'que_ofrecemos')?.submenu.map((submenuItem) => (
        <li
            key={submenuItem.id}
            onMouseEnter={() => handleQueOfrecemosSubMenuClick(submenuItem.id)}
        >
            <Link to={submenuItem.link}>
                {submenuItem.nombre}
            </Link>
        </li>
    ));

    const productosSubMenu = openQueOfrecemosSubMenu === 'productos' || openProductosSubMenu === 'productos' ? (
        <ul className="submenu product-submenu">
            {menus.find((menu) => menu.id === 'que_ofrecemos')?.submenu.find((item) => item.id === 'productos')?.submenu.map((submenuItem) => (
                <li
                    key={submenuItem.id}
                    onMouseEnter={() => handleProductosSubMenuClick(submenuItem.id)}
                    onMouseLeave={() => setOpenProductosSubMenu(null)}
                >
                    <Link to={submenuItem.link}>
                        {submenuItem.nombre}
                    </Link>
                </li>
            ))}
        </ul>
    ) : null;

    return (
        <header>
            <div className="logo">
                <img src={Logo} alt="Logo" />
                <h1>Belix Total Fitness</h1>
            </div>
            <nav>
                <ul className="navLinks">
                    {menus.map((menu) => (
                        <li
                            key={menu.id}
                            onMouseEnter={() => setOpenQueOfrecemosSubMenu(null)}
                            onMouseLeave={() => setOpenProductosSubMenu(null)}
                        >
                            <Link to={menu.link}>
                                {menu.nombre}
                            </Link>
                            {menu.id === 'que_ofrecemos' && menu.submenu && (
                                <ul className={`submenu ${openQueOfrecemosSubMenu === menu.id || openProductosSubMenu === 'productos' ? 'active' : ''}`}>
                                    {queOfrecemosSubMenu}
                                    {productosSubMenu}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
