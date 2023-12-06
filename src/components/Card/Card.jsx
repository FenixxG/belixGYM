import './card.css';
export const Card = (
    {
        nombre,
        descripcion,
        imagen
    }
)=>{
    return(
        <div className="card">
            <img src={imagen} alt="Imagen correspondiente a la tarjeta"/>
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">{descripcion}</p>
            </div>
        </div>
    )
}