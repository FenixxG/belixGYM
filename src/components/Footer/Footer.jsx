import './footer.css'
import Logo from '../../assets/belixlogo.png';

const Footer = () => {
    return (
        // <footer>
        //     <div className="horario">
        //         <h3>Horario</h3>
        //         <p>Lunes a Viernes 5:00 AM - 9:00 PM <br /> Sabado 6:00 AM - 4:00 PM</p>
        //     </div>
        //     <img src="#" alt="Logo" />
        //     <div className="sociales">
        //         <h3>Redes Sociales</h3>
        //     </div>
        //     <strong>Belix Total Fitness &copy; 2023</strong>

        // </footer>
        <footer>
            <div class="footer-content">
                <div class="horario">
                    <h3>Horario</h3>
                    <p>Lunes a Viernes 5:00 AM - 9:00 PM <br /> Sabado 6:00 AM - 4:00 PM</p>
                </div>
                <img src={Logo} alt="Logo" />
                <div class="sociales">
                    <h3>Redes Sociales</h3>
                </div>
            </div>
            <strong>Belix Total Fitness &copy; 2023</strong>
        </footer>



    )
}

export default Footer;