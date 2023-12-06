import Page from "./Page";
import { CardGallery } from "../components/Card/GalleryCard";
import './servicios.css';
import servicios from '../data/servicios.json';

export const Servicios = () => {
  return (
    <Page>
      <section className="servicios">
        <div className="titulos">
          <h1>Servicios</h1>
          <h2>Contamos con una variedad de servicios</h2>
        </div>
        <div class="contenedor-carta">
          <CardGallery cards={servicios} />
        </div>
      </section>
    </Page>
  )
}