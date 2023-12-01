import React from 'react';
import Page from './Page';
import './inicio.css';

import imagenHero from '../assets/imagenHero.jpg';

export const Inicio = () => {
    return (
        <Page>
            <section className="hero">
                <img src={imagenHero} alt="Hero" />
            </section>

            <section className="about">
                <div className="about-content">
                    <img src="ruta_de_tu_imagen" alt="Acerca de" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque maiores, est praesentium possimus iusto facere repellat sit doloribus asperiores qui quidem reiciendis mollitia neque at corrupti. Quia quasi eveniet placeat!</p>
                </div>
            </section>

            <section className="location">
                <div className="location-content">
                    <p>Aquí va tu dirección</p>
                    {/* El iframe del mapa de Google Maps */}
                    <iframe
                        title="Mapa"
                        src="https://www.google.com/maps/embed?..."
                        width="600"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </section>
        </Page>
    );
};

