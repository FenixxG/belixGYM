import React from "react";
import Page from "./Page";
import "./blg.css";
import blogData from "../data/heroblog.json";
import comentariosData from "../data/comentarios.json";
import eventosData from "../data/proximosEventos.json";

export const Blog = () => {
  return (
    <Page>
      <div class="titulo">
        <h1>Nuestro Blog</h1>
      </div>
      <section className="hero-section">
        <div className="faq-list">
          <h2>Preguntas Frecuentes</h2>
          <ul>
            <li>¿Cuáles son los beneficios de hacer ejercicio regularmente?</li>
            <li>¿Puedo obtener un plan de entrenamiento personalizado?</li>
            <li>¿Cómo puedo medir mi progreso fitness?</li>
            <li>¿Ofrecen clases grupales? ¿Cuáles son?</li>
            <li>¿Tienen entrenadores personales disponibles?</li>
            <li>¿Puedo congelar o pausar mi membresía temporalmente?</li>
          </ul>
        </div>
        <div className="image-gallery">
          {blogData.map((post) => (
            <div key={post.id} className="blog-post">
              <img src={post.imagenUrl} />
            </div>
          ))}
        </div>
      </section>

      <section className="comentarios-section">
        <br />
        <div className="titulo">
          <h2>Comentarios de Nuestros Clientes</h2>
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
      </section>{" "}
    </Page>
  );
};

export default Blog;
