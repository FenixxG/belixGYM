import Page from "./Page";
import './accesorios.css';
import { CardGallery } from "../components/Productos/GalleryProducto";

import dataGuantes from '../data/guantes.json';
import dataCinturones from '../data/cinturones.json';
import dataAudifonos from '../data/audifonos.json';

export const Accesorios = () => {
  return (
    <Page>
        <div class="contenedor-accesorios">
          <div>
            <div class="titulos">
              <h1>Productos</h1>
              <h2>Contamos con los Accesorios de la mayor calidad</h2>
            </div>
            <div class="tipo-accesorio">
              <h2>Guantes</h2>
              <div class="separador-accesorio" />
            </div>
            <CardGallery cards={dataGuantes} />

            <div class="tipo-accesorio">
              <h2>Cinturones</h2>
              <div class="separador-accesorio" />
            </div>
            <CardGallery cards={dataCinturones} />

            <div class="tipo-accesorio">
              <h2>Audifonos</h2>
              <div class="separador-accesorio" />
            </div>
            <CardGallery cards={dataAudifonos} />
          </div>
        </div>
    </Page>
  )
}