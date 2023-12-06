import React from "react";
import Page from "./Page";
import "./blg.css";
import comentariosData from "../data/comentarios.json";
import eventosData from "../data/proximosEventos.json";

export const Blog = () => {
  return (
    <Page>
      <section className="centered-title">
        <h2 className="m-4 p-4 title-styling uppercase">Blog</h2>
      </section>
      <section className="comentarios-section">
        <br />
        <div className="titulo">
          <h2 className="uppercase text-[#637179]">Comentarios de Nuestros Clientes</h2>
        </div>
        <div class="separador-consumible" />
        <div className="comentarios-list">
          {comentariosData.map((comentario) => (
            <div key={comentario.id} className="comentarios">
              <img
                src={comentario.imagenUrl}
                alt={`Cliente ${comentario.id}`}
              />
              <p>{comentario.comentario}</p>
              <p>- {comentario.autor}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="events-section">
        <br />
        <div className="titulo">
          <h2>Próximos Eventos y Anuncios</h2>
        </div>
        <div class="separador-consumible" />
        <div className="event-list">
          {eventosData.map((evento) => (
            <div key={evento.id} className="event">
              <img src={evento.imagenUrl} alt={`Evento ${evento.id}`} />
              <h3>{evento.titulo}</h3>
              <p>
                Fecha: {evento.fecha} | Hora: {evento.hora}
              </p>
              <p>{evento.descripcion}</p>
            </div>
          ))}
        </div>
        <br />
      </section>{" "}
    </Page>
  );
};

export default Blog;
