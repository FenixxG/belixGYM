import Page from "./Page";
import entrenador2 from '../assets/entrenador2.jpg'
import entrenador from '../assets/entrenador.jpg'
import './acerca.css'


export const Acercade = () => {
    return (
      <Page title="Acerca Page">

        <div>
            <div class="contenedor-acerca  mx-auto p-4 static">

                <div class="acerca-mv">
                    <h1>Acerca de Nosotros</h1>
                    <div class="acerca-mision">
                        <h2>Mision</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Vivamus ac ultricies lectus.
                            Sed neque massa, interdum nec laoreet eget, dapibus interdum arcu.
                            Mauris consectetur mauris ac mollis mollis. Etiam sed sollicitudin nulla.
                            Vestibulum dui elit, lobortis ut ultricies vitae, imperdiet et magna.</p>
                    </div>
                    <div class="acerca-mision acerca-vision">
                        <h2>Vision</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Vivamus ac ultricies lectus.
                            Sed neque massa, interdum nec laoreet eget, dapibus interdum arcu.
                            Mauris consectetur mauris ac mollis mollis. Etiam sed sollicitudin nulla.
                            Vestibulum dui elit, lobortis ut ultricies vitae, imperdiet et magna.</p>
                    </div>

                   
                </div>

                <div class="separador" />

                <div class="contenedor-entrenadores">
                    <h1>Nuestros Entrenadores</h1>

                    <div class="contenedor-carta">
                        <div class="entrenadores">
                            <img src={entrenador} alt="Imagen de entrenador" />
                            <h2>Gabriel Mazariegos</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing
                                elit. Consectetur dolorum optio, eaque dolorem perferendis
                                excepturi velit quisquam adipisci blanditiis illum</p>
                        </div>

                        <div class="entrenadores">
                            <img src={entrenador2} alt="Imagen de entrenador" />
                            <h2>David Canales</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing
                                elit. Consectetur dolorum optio, eaque dolorem perferendis
                                excepturi velit quisquam adipisci blanditiis illum</p>
                        </div>

                        <div class="entrenadores">
                            <img src={entrenador} alt="Imagen de entrenador" />
                            <h2>Thomas</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing
                                elit. Consectetur dolorum optio, eaque dolorem perferendis
                                excepturi velit quisquam adipisci blanditiis illum</p>
                        </div>

                        <div class="entrenadores">
                            <img src={entrenador} alt="Imagen de entrenador" />
                            <h2>Elias</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing
                                elit. Consectetur dolorum optio, eaque dolorem perferendis
                                excepturi velit quisquam adipisci blanditiis illum</p>
                        </div>

                        <div class="entrenadores">
                            <img src={entrenador} alt="Imagen de entrenador" />
                            <h2>Carlos</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing
                                elit. Consectetur dolorum optio, eaque dolorem perferendis
                                excepturi velit quisquam adipisci blanditiis illum</p>
                        </div>
                    </div>
                </div>
                
                
            </div>
            
        </div>
      </Page>
    )
}