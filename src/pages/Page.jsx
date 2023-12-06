import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import './page.css';

const Page = ({ children }) => {
  const location = useLocation();
  const [marginBottom, setMarginBottom] = React.useState("0px");

  // Función para determinar el margen basado en la ruta actual y resolución de pantalla
  const getMarginBottom = () => {
    if (location.pathname.includes("/que-ofrecemos/productos/consumibles")) {
      if (window.innerWidth < 854) {
        return "6200px";
      } else if (window.innerWidth >= 854 && window.innerWidth < 1246) {
        return "3750px";
      } else {
        return "2500px";
      }
    } else if (location.pathname.includes("/que-ofrecemos/productos/consumibles")) {
      if (window.innerWidth < 854) {
        return "6200px";
      } else if (window.innerWidth >= 854 && window.innerWidth < 1246) {
        return "3750px";
      } else {
        return "2500px";
      }
    } else if (location.pathname.includes("/que-ofrecemos/productos/accesorios")) {
      if (window.innerWidth < 854) {
        return "6200px";
      } else if (window.innerWidth >= 854 && window.innerWidth < 1246) {
        return "3750px";
      } else {
        return "2500px";
      }
    } else if (location.pathname.includes("/acerca-de")) {
      if (window.innerWidth < 854) {
        return "1650px";
      } else if (window.innerWidth >= 854 && window.innerWidth < 1246) {
        return "850px";
      } else {
        return "400px";
      }
    } else if (location.pathname.includes("/contacto")) {
      if (window.innerWidth < 854) {
        return "250px";
      } else if (window.innerWidth >= 854 && window.innerWidth < 1280) {
        return "250px";
      } else {
        return "400px";
      }
    } else if (location.pathname.includes("/")) {
      if (window.innerWidth < 854) {
        return "2050px";
      } else if (window.innerWidth >= 854 && window.innerWidth < 1280) {
        return "1550px";
      } else {
        return "858px";
      }
    }
  };

  // Actualizar el estado cuando cambie la ubicación o el tamaño de la ventana
  useEffect(() => {
    setMarginBottom(getMarginBottom());
  }, [location.pathname, window.innerWidth]);

  // Manejar el evento de cambio de tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      setMarginBottom(getMarginBottom());
    };

    window.addEventListener('resize', handleResize);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [location.pathname]);

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