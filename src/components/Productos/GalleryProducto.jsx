import { CardProducto } from "./CardProducto";
import "./galleryproducto.css";

export const CardGallery = ({ cards }) => {

  const cardsList = cards.map((card) => {
    return (
      <CardProducto
        key={card.id}
        nombre={card.nombre}
        descripcion={card.descripcion}
        image={card.imgUrl}
        precio={card.precio}

      />
    );
  });

  return (
    <section className="cardGallery">
      {cardsList}
    </section>
  )

};
