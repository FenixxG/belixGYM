import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import './page.css';

const Page = ({ children }) => {
  const location = useLocation();
  const [marginBottom, setMarginBottom] = useState("0px");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Función para determinar el margen basado en la ruta actual y resolución de pantalla
  const getMarginBottom = () => {
    if (location.pathname.includes("/que-ofrecemos/productos/consumibles")) {
      if (windowWidth < 854) {
        return "6200px";
      } else if (windowWidth >= 854 && windowWidth < 1246) {
        return "3750px";
      } else {
        return "2600px";
      }
    } else if (location.pathname.includes("/que-ofrecemos/productos/accesorios")) {
      if (windowWidth < 854) {
        return "6200px";
      } else if (windowWidth >= 854 && windowWidth < 1246) {
        return "3750px";
      } else {
        return "2600px";
      }
    } else if (location.pathname.includes("/acerca-de")) {
      if (windowWidth < 854) {
        return "1650px";
      } else if (windowWidth >= 854 && windowWidth < 1246) {
        return "850px";
      } else {
        return "450px";
      }
    } else if (location.pathname.includes("/contacto")) {
      if (windowWidth < 854) {
        return "250px";
      } else if (windowWidth >= 854 && windowWidth < 1280) {
        return "250px";
      } else {
        return "400px";
      }
    } else if (location.pathname.includes("/faq")) {
      if (windowWidth < 854) {
        return "2050px";
      } else if (windowWidth >= 854 && windowWidth < 1280) {
        return "1550px";
      } else {
        return "0px";
      }
    } else if (location.pathname.includes("/blog")) {
      if (windowWidth < 854) {
        return "2050px";
      } else if (windowWidth >= 854 && windowWidth < 1280) {
        return "1550px";
      } else {
        return "1000px";
      }
    } else if (location.pathname.includes("/que-ofrecemos/servicios")) {
      if (windowWidth < 854) {
        return "2050px";
      } else if (windowWidth >= 854 && windowWidth < 1280) {
        return "1550px";
      } else {
        return "500px";
      }
    } else if (location.pathname.includes("/que-ofrecemos/programas")) {
      if (windowWidth < 854) {
        return "2050px";
      } else if (windowWidth >= 854 && windowWidth < 1280) {
        return "1550px";
      } else {
        return "500px";
      }
    } else if (location.pathname.includes("/")) {
      if (windowWidth < 854) {
        return "2050px";
      } else if (windowWidth >= 854 && windowWidth < 1280) {
        return "1550px";
      } else {
        return "1400px";
      }
    }
    // Valor predeterminado si no coincide con ninguna ruta conocida
    return "0px";
  };

  // Actualizar el estado cuando cambie la ubicación
  useEffect(() => {
    setMarginBottom(getMarginBottom());
  }, [location.pathname]);

  // Manejar el evento de cambio de tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Actualizar el margen cuando cambie el tamaño de la ventana
  useEffect(() => {
    setMarginBottom(getMarginBottom());
  }, [windowWidth]);

  return (
    <>
      <Header />
      <main style={{ marginBottom: marginBottom }}>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Page;