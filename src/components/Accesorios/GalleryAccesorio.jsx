import { Card } from "./CardAccesorio";
import './galleryaccesorio.css';
export const CardGallery = ( {cards} ) => {
    const onClickHandler = (nombre) => {
        alert(nombre);
    }

    const cardsList = cards.map( (card) => {
        return(
        <Card
            key={card.id}
            nombre={card.nombre}
            descripcion={card.descripcion}
            image={card.imgUrl}
            precio={card.precio}
            onClick={onClickHandler}
    
        />);
    });
    

    return (
        <section className="cardGallery">
            {cardsList}
        </section>
    )
}