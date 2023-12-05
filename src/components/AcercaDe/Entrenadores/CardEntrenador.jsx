import './cardentrenador.css';
export const Card = (
    {
        nombre,
        descripcion,
        image,
        onClick
    }
)=>{
    return(
        <div className="card">
            <img src={image} alt="Imagen Entrenador"/>
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">{descripcion}</p>
            </div>
        </div>
    )
}
