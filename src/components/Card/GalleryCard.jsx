import { Card } from "./Card";
import './gallerycard.css';

export const CardGallery = ({ cards }) => {

    const cardsList = cards.map((card) => {
        return (
            <Card
                key={card.id}
                nombre={card.nombre}
                descripcion={card.descripcion}
                imagen={card.imagen}
            />
        );
    });


    return (
        <section className="cardGallery">
            {cardsList}
        </section>
    )
}