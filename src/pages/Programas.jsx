import Page from "./Page";
import { CardGallery } from "../components/Card/GalleryCard";
import './programas.css';
import programas from '../data/programas.json';

export const Programas = () => {
  return (
    <Page>
      <section className="programas">
        <div className="titulos">
          <h1>Programas</h1>
          <h2>Contamos con los programas que se adaptan a tu meta</h2>
        </div>
        <div class="contenedor-carta">
          <CardGallery cards={programas} />
        </div>
      </section>
    </Page>
  )
}