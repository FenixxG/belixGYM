import './cardproducto.css';

export const Card = (
    {
        nombre,
        descripcion,
        image,
        precio
    }
) => {
    return (
        <div className="card">
            <img src={image} alt="Imagen Producto" />
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">{descripcion}</p>
                <div class="precio-consumible">
                    <p>{precio}</p>
                </div>
            </div>
        </div>
    )
}
