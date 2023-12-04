import React, { useState } from 'react';
import Page from "./Page";
import './faq.css';

export const FAQ = () => {
  // Estado local para manejar el estado de cada pregunta
  const [answersVisible, setAnswersVisible] = useState({});

  // Función para manejar el clic en el botón
  const toggleAnswer = (index) => {
    setAnswersVisible({
      ...answersVisible,
      [index]: !answersVisible[index],
    });
  };

  return (
    <Page>
      <div className="faq-content">
        <div className="faq-container">
          <div className="faq-title ">
            <h2>FREQUENTLY ASKED QUESTIONS</h2>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              ¿Hay entrenadores?
              <button
                className="faq-toggle-button"
                onClick={() => toggleAnswer(0)}
              >
                +
              </button>
            </div>
            {answersVisible[0] && (
              <div className="faq-answer">Si, habemos entrenadores disponibles en todos los horarios.</div>
            )}
          </div>

          <div className="faq-item">
            <div className="faq-question">
              ¿Cuales son los horarios?
              <button
                className="faq-toggle-button"
                onClick={() => toggleAnswer(1)}
              >
                +
              </button>
            </div>
            {answersVisible[1] && (
              <div className="faq-answer">
                Lunes a viernes 5:00a.m. - 9:00p.m.
                <br /> Sábados 6:00a.m. - 6:00p.m.
              </div>
            )}
          </div>

          <div className="faq-item">
            <div className="faq-question">
              ¿Hay descuento por más de 2 personas?
              <button
                className="faq-toggle-button"
                onClick={() => toggleAnswer(2)}
              >
                +
              </button>
            </div>
            {answersVisible[2] && (
              <div className="faq-answer">No, los precios son fijos sin importar cuántos lleguen.</div>
            )}
          </div>

          <div className="faq-item">
            <div className="faq-question">
              ¿El entrenamiento es personalizado o general?
              <button
                className="faq-toggle-button"
                onClick={() => toggleAnswer(3)}
              >
                +
              </button>
            </div>
            {answersVisible[3] && (
              <div className="faq-answer">
                El entrenamiento es general. Si desea un entrenamiento personalizado, debe hablarlo con el instructor de turno para que él le brinde la información sobre si trabaja o no con entrenamiento personalizado, el cual incluye un costo extra.
              </div>
            )}
          </div>
        </div>
      </div>
    </Page>
  );
}