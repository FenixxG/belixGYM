import { useState } from "react";
import Page from "./Page";
import './contact.css';

export const Contact = () => {
    // useState return [value, setterFunction]
    const [name, setName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    const onClickHandler = (e) => {
        e.preventDefault();
        //Validaciones
        console.log(name,email,comment,telephone)
    }

    return (
        <Page title="Contact">
            <form class="form">
                <div>
                    <label htmlFor="">Nombre Completo:</label>
                    <input type="text" name="name" id="name" value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>

                <div>
                    <label htmlFor="">Numero de Teléfono:</label>
                    <input type="number" name="email" id="email" value={telephone} onChange={(e) => { setEmail(e.target.value) }} />
                </div>

                <div>
                    <label htmlFor="">Correo Electrónico:</label>
                    <input type="text" name="email" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>

                <div>
                    <label htmlFor="">Mensaje:</label><br />
                    <textarea value={comment} id="comment" name="comment" onChange={(e) => { setComment(e.target.value) }}></textarea>
                </div>

                <div>
                    <button type="submit" onClick={onClickHandler}>Enviar</button>
                </div>
            </form>
        </Page>
    );
}