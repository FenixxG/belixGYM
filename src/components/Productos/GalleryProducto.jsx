import { Card } from "./CardProducto";
<<<<<<< HEAD
import './galleryproducto.css';
export const CardGallery = ({ cards }) => {
    // const onClickHandler = (nombre) => {
    //     alert(nombre);
    // }

    const cardsList = cards.map((card) => {
        return (
            <Card
                key={card.id}
                nombre={card.nombre}
                descripcion={card.descripcion}
                image={card.imgUrl}
                precio={card.precio}
            />
        );
    });
=======
import "./galleryproducto.css";
export const CardGallery = ({ cards }) => {
  const onClickHandler = (nombre) => {
    alert(nombre);
  };
>>>>>>> 107316a9a958961644d11ff2211560f9d7d7154a

  const cardsList = cards.map((card) => {
    return (
      <Card
        key={card.id}
        nombre={card.nombre}
        descripcion={card.descripcion}
        image={card.imgUrl}
        precio={card.precio}
        onClick={onClickHandler}
      />
    );
  });

  return <section className="cardGallery">{cardsList}</section>;
};
