import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import './page.css';

const Page = ({ children }) => {
  const location = useLocation();

  // Función para determinar el margen basado en la ruta actual
 // Función para determinar el margen basado en la ruta actual y resolución de pantalla
 const getMarginBottom = () => {
  if (location.pathname.includes("/que-ofrecemos/productos/consumibles")) {
    return window.innerWidth < 768 ? "6200px" : "2500px";
  } else if (location.pathname.includes("/que-ofrecemos/productos/accesorios")) {
    return window.innerWidth < 768 ? "6200px" : "2500px";
  } else if (location.pathname.includes("/acerca-de")) {
    return window.innerWidth < 768 ? "1700px" : "800px";
  } else if (location.pathname.includes("/")) {
    return window.innerWidth < 768 ? "2100px" : "1400px";
  } else {
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