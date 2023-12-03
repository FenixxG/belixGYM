import Page from "./Page";
import './accesorios.css';
import { CardGallery } from "../components/Accesorios/GalleryAccesorio";

import cardData from '../data/accesorios.json';

export const Accesorios = () => {
  return (
    <Page>
      <section>
        <div class="contenedor-accesorios">
          <div>
            <div class="titulos">
              <h1>Productos</h1>
              <h2>Contamos con los Accesorios de la mayor calidad</h2>
            </div>
            <CardGallery cards={cardData} />
          </div>
        </div>
      </section>
    </Page>
  )
}