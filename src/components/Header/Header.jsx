import menus from './menu.json';
import './header.css';

const Header = () => {
    const menuItems = menus.map((menu) => {
        return (
            <li key={menu.id}>
                <a href={menu.link}>{menu.nombre}</a>
                {menu.submenu && (
                    <ul className="dropdownMenu">
                        
                    </ul>
                )}
            </li>
        );
    });

    return (
        <header>
            <div className="logo">
                <img src="" alt="Logo" />
                <h1>Belix Total Fitness</h1>
            </div>
            <nav>
                <ul className="navLinks">
                    {/* <li>
                        <a href>Inicio</a>
                    </li>
                    <li>
                        <a href>Que ofrecemos</a>
                        <ul className="dropdownMenu">
                            <li>
                                <a href>Servicios</a>
                            </li>
                            <li>
                                <a href>Mensualidades</a>
                            </li>
                            <li>
                                <a href>Productos</a>
                                <ul className="dropdownMenu">
                                    <li>
                                        <a href>Consumibles</a>
                                    </li>
                                    <li>
                                        <a href>Accesorios</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href>Programas</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href>Blog</a>
                    </li>
                    <li>
                        <a href>Contacto</a>
                    </li>
                    <li>
                        <a href>Acerca de</a>
                    </li>
                    <li>
                        <a href>FAQ</a>
                    </li> */}
                    {menuItems}
                </ul>
            </nav>
        </header>
    );
}

export default Header;