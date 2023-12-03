import Page from "./Page";
import './consumibles.css';
import { CardGallery } from "../components/Consumibles/GalleryProduct";

import cardData from '../data/consumibles.json';

export const Consumibles = () => {
 
  
  return (
    <Page>
      <div class="contenedor-consumibles">
        <div>
          <div class="titulos">
          <h1>Productos</h1>
          <h2>Contamos con los suplementos de la mayor calidad</h2>
          </div>
          <CardGallery cards={cardData} />
        </div>
      </div>
    </Page>
  )
}