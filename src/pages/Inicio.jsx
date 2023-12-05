import Page from "./Page";
import "./inicio.css";

import imagenHero from '../assets/imagenHeroPanel.jpg';
import imagenAcerca from '../assets/acerca.jpg'

export const Inicio = () => {
    return (
        <Page>
            <section className="hero-panel">
                <img src={imagenHero} alt="Imagen Hero Panel" />
            </section>
            <section className="acerca">
                <div class="separador-inicio" />
                <h2>Acerca de</h2>
                <div className="acerca-info">
                    <img src={imagenAcerca} alt="Imagen Acerca de" />
                    <p>
                        Belix Total Fitness es un gimnasio que ha sido un pilar en la ciudad de Siguatepeque desde su establecimiento en 2005. Reconocido por su compromiso con la salud y el bienestar de la comunidad, se ha convertido en un punto de referencia para aquellos que buscan mejorar su estado físico y estilo de vida.
                        Belix Total Fitness se destaca por su enfoque integral. Ofrece clases de entrenamiento funcional, pesas, cardio, así como asesoramiento personalizado de entrenadores capacitados. <br /> <a href="#">Ver mas ...</a>
                    </p>
                </div>
            </section>
            <section className="ubicacion">
                <div class="separador-inicio" />
                <h2>Ubicación</h2>
                <div className="ubicacion-info">
                    <p>
                        Estamos ubicados en: <br /> 2 Calle, 3 Ave., Siguatepeque, Honduras, 12111
                    </p>
                    <div className="mapa">
                        <iframe
                            title="Ubicación"
                            width="450"
                            height="350"
                            loading="lazy"
                            allowFullScreen
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.0143758561107!2d-87.83880908858802!3d14.598256677073728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f65959f6c3452cf%3A0x5d48aba41509ed32!2sBelix%20Total%20Fitness!5e0!3m2!1ses-419!2shn!4v1701651894584!5m2!1ses-419!2shn"
                        ></iframe>
                    </div>
                </div>
            </section>
        </Page>
    );
};
