import Page from "./Page";
import './consumibles.css';
import { CardGallery } from "../components/Consumibles/GalleryProduct";


import dataProte from '../data/Proteinas.json';
import dataCreatine from '../data/creatina.json';
import dataPre from '../data/preEntreno.json';

export const Consumibles = () => {


  return (
    <Page>
      <div class="contenedor-consumibles">
        <div>
          <div class="titulos">
            <h1>Productos</h1>
            <h2>Contamos con los suplementos de la mayor calidad</h2>
          </div>
          <div class="tipo-producto">
            <h2>Creatina</h2>
            <div class="separador-consumible" />
          </div>
          <CardGallery cards={dataCreatine} />

          <div class="tipo-producto">
            <h2>Pre-Entreno</h2>
            <div class="separador-consumible" />
          </div>
          <CardGallery cards={dataPre} />

          <div class="tipo-producto">
            <h2>Proteina</h2>
            <div class="separador-consumible" />
          </div>
          <CardGallery cards={dataProte} />
        </div>
      </div>
    </Page>
  )
}