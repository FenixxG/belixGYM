import Page from "./Page";
import "./inicio.css";

import imagenHero from "../assets/imagenHero.jpg";

export const Inicio = () => {
    return (
        <Page>
            <section className="hero-panel">
                <img src={imagenHero} alt="Imagen Hero Panel" />
            </section>
        </Page>
    );
};
