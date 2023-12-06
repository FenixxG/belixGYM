import Page from "./Page";
<<<<<<< HEAD
import entrenador2 from "../assets/entrenador2.jpg";
import entrenador from "../assets/entrenador.jpg";
=======
>>>>>>> 383c7f341189a66a3d57c20de190291061866f66
import { CardGallery } from "../components/AcercaDe/Entrenadores/GalleryEntrenador";
import dataEntrenador from "../data/entrenadores.json";
import "./acerca.css";

export const Acercade = () => {
  return (
    <Page title="Acerca Page">
      <div>
        <div class="contenedor-acerca  mx-auto p-4 static">
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
