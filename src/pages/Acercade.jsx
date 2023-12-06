import Page from "./Page";
import { CardGallery } from "../components/Card/GalleryCard";
import dataEntrenador from "../data/entrenadores.json";
import "./acerca.css";

export const Acercade = () => {
  return (
    <Page title="Acerca Page">
      <div>
        <div class="contenedor-acerca  ">
          <div class="contenedor-entrenadores">
            <h1>Nuestros Entrenadores</h1>

            <div class="contenedor-carta">
              <CardGallery cards={dataEntrenador} />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};
