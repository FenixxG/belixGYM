// Mensualidades.jsx
import React from "react";
import Page from "./Page";
import "./mensualidades.css";

const Mensualidades = () => {
  return (
    <Page>
      
      <section className="text-center">
        <br />
        <h2 className="blog-title">Mensualidades</h2>
        <br />
        <div class="separador-consumible" />
      </section>

      
      <section className="center-cards">
        {/* Plan Diario */}
        <div className="border p-4 transition-transform transform hover:scale-105">
          <h3 className="text-xl font-bold">Plan Diario</h3>
          <p className="text-lg font-bold text-[#c40000] mb-2">70.00 Lps</p>
          <ul className="list-disc pl-4">
            <li>Acceso al gimnasio</li>
            <li>Valido por un Día</li>
          </ul>
        </div>

        {/* Plan Semanal */}
        <div className="border p-4 transition-transform transform hover:scale-105">
          <h3 className="text-xl font-bold">Plan Semanal</h3>
          <p className="text-lg font-bold text-[#c40000] mb-2">200.00 Lps</p>
          <ul className="list-disc pl-4">
            <li>Acceso al gimnasio</li>
            <li>Valido por una semana</li>
          </ul>
        </div>

        {/* Plan de Quincena */}
        <div className="border p-4 transition-transform transform hover:scale-105">
          <h3 className="text-xl font-bold">Plan de Quincena</h3>
          <p className="text-lg font-bold text-[#c40000] mb-2">300.00 Lps</p>
          <ul className="list-disc pl-4">
            <li>Acceso al gimnasio</li>
            <li>Valido por una Quincena</li>
          </ul>
        </div>

        {/* Plan Básico */}
        <div className="border p-4 transition-transform transform hover:scale-105">
          <h3 className="text-xl font-bold">Plan Básico</h3>
          <p className="text-lg font-bold text-[#c40000] mb-2">600.00 Lps</p>
          <ul className="list-disc pl-4">
            <li>Acceso al gimnasio</li>
            <li>Valido por un Mes</li>
          </ul>
        </div>

        {/* Plan Estándar */}
        <div className="border p-4 transition-transform transform hover:scale-105">
          <h3 className="text-xl font-bold">Plan Estándar</h3>
          <p className="text-lg font-bold text-[#c40000] mb-2">1000.00 Lps</p>
          <ul className="list-disc pl-4">
            <li>Acceso al gimnasio</li>
            <li>Valido por dos meses</li>
          </ul>
        </div>

        {/* Plan Premium */}
        <div className="border p-4 transition-transform transform hover:scale-105">
          <h3 className="text-xl font-bold">Plan Premium</h3>
          <p className="text-lg font-bold text-[#c40000] mb-2">3000.00 Lps</p>
          <ul className="list-disc pl-4">
            <li>Acceso al gimnasio</li>
            <li>Valido por un año</li>
          </ul>
        </div>
        <br />
      </section>
      
    </Page>
  );
};

export default Mensualidades;

