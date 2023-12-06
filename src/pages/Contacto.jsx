import { useState } from "react";
import Page from "./Page";
import './contacto.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Contacto = () => {
    // useState return [value, setterFunction]
    const [name, setName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const onClickHandler = (e) => {
        e.preventDefault();
        //Validaciones
        console.log(name, email, comment, telephone)
    }

    return (
        <Page title="Contact">
            <div class="container">
                <div class="container-info-form">
                <div class="contact-info">
                    <h1>Contactanos</h1>
                    <p>Contáctenos sobre cualquier cosa relacionada con nuestro gimnasio o servicios. </p>
                    <p>Haremos todo lo posible para responderte lo antes posible.</p>
                    <div class="contact-icons">
                        <FontAwesomeIcon icon={faPhone} />
                        <span>9574-7107</span>
                        <br />
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>belix10@yahoo.com</span>
                    </div>
                </div>

                <form class="form">
                    <div>
                        <label htmlFor="">Nombre Completo:</label>
                        <input type="text" name="name" id="name" value={name} onChange={(e) => { setName(e.target.value) }} />
                    </div>

                    <div>
                        <label htmlFor="">Numero de Teléfono:</label>
                        <input type="number" name="telephone" id="telephone" value={telephone} onChange={(e) => { setTelephone(e.target.value) }} />
                    </div>

                    <div>
                        <label htmlFor="">Correo Electrónico:</label>
                        <input type="text" name="email" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>

                    <div class="input-mensaje">
                        <label htmlFor="">Mensaje:</label><br />
                        <textarea value={comment} id="comment" name="comment" onChange={(e) => { setComment(e.target.value) }}></textarea>
                    </div>

                    <div>
                        <button type="submit" onClick={onClickHandler}>Enviar</button>
                    </div>
                </form>
                </div>
            </div>
        </Page>
    );
}