import menus from './menu.json';
import './header.css';
import Logo from '../../assets/belixlogo.png';

const Header = () => {
    const menuItems = menus.map((menu) => {

        const subMenu = menu.submenu? menu.submenu.map((menusub) => {
            <li key={menusub.id}>
                <a href={menusub.link}>{menusub.nombre}</a>
            </li>
        }):null;

        return (
            <li key={menu.id}>
                <a href={menu.link}>{menu.nombre}</a>
                {subMenu && (
                    <ul>{subMenu}</ul>
                )}
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
}

export default Header;