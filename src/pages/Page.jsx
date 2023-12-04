import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import './page.css';

const Page = ({ children }) => {
  const location = useLocation();

  // Función para determinar el margen basado en la ruta actual
  const getMarginBottom = () => {
    if (location.pathname.includes("/que-ofrecemos/productos/consumibles")) {
      return "2500px";
    } else if (location.pathname.includes("/que-ofrecemos/productos/accesorios")) {
      return "2600px";
    } else if (location.pathname.includes("/acerca-de")) {
      return "600px";
    } else if (location.pathname.includes("/")) {
      return "1300px";
    } else if (location.pathname.includes("/contacto")) {
      return "1300px";
    }
    else {
      return "0px"; // Valor predeterminado
    }
  };

  return (
    <>
      <Header />
      <main style={{ marginBottom: getMarginBottom() }}>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Page;