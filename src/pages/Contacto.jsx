import { useState } from "react";
import Page from "./Page";
import './contacto.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Contacto = () => {
    const [name, setName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const validarFormulario = (e) => {
        e.preventDefault();

        // Validar el nombre
        const validarNombre = /^[a-zA-Z\s]+$/;
        if (!validarNombre.test(name)) {
            alert("El nombre no es válido");
            return;
        }

        // Validar el teléfono
        const validarTelefono = /^\d{8}$/;
        if (!validarTelefono.test(telephone)) {
            alert("El teléfono no es válido");
            return;
        }

        // Validar el email
        const validarEmail = /^\S+@\S+\.\S+$/;
        if (!validarEmail.test(email)) {
            alert("El email no es válido");
            return;
        }

        // Si todos los campos son válidos, enviar el formulario
        alert("Gracias por tu mensaje, haremos todo lo posible para contactarnos lo antes posible.");
    }

    return (
        <Page title="Contact">
            <div className="container">
                <div className="container-info-form">
                    <div className="contact-info">
                        <h1>Contactanos</h1>
                        <p>Contáctenos sobre cualquier cosa relacionada con nuestro gimnasio o servicios. </p>
                        <p>Haremos todo lo posible para responderte lo antes posible.</p>
                        <div className="contact-icons">
                            <FontAwesomeIcon icon={faPhone} />
                            <span>9574-7107</span>
                            <br />
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span>belix10@yahoo.com</span>
                        </div>
                    </div>

                    <form className="form" action="https://formsubmit.co/agartoxic19xel@gmail.com" method="POST" onSubmit={validarFormulario}>
                        <div>
                            <label htmlFor="nombre">Nombre Completo:</label>
                            <input type="text" name="name" id="nombre" value={name} onChange={(e) => { setName(e.target.value) }} />
                        </div>

                        <div>
                            <label htmlFor="telefono">Numero de Teléfono:</label>
                            <input type="number" name="telephone" id="telefono" value={telephone} onChange={(e) => { setTelephone(e.target.value) }} />
                        </div>

                        <div>
                            <label htmlFor="correo">Correo Electrónico:</label>
                            <input type="text" name="email" id="correo" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </div>

                        <div className="input-mensaje">
                            <label htmlFor="comment">Mensaje:</label><br />
                            <textarea value={comment} id="comment" name="comment" onChange={(e) => { setComment(e.target.value) }}></textarea>
                        </div>

                        <div>
                            <button type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </Page>
    );
}