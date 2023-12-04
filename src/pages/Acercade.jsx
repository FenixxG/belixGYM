import Page from "./Page";
import entrenador2 from '../assets/entrenador2.jpg'
import entrenador from '../assets/entrenador.jpg'
import './acerca.css'


export const Acercade = () => {
    return (
      <Page title="Acerca Page">

        <div>
            <div class="contenedor-acerca  mx-auto p-4 static">

                <div class="contenedor-entrenadores">
                    <h1>Nuestros Entrenadores</h1>

                    <div class="contenedor-carta">
                        <div class="entrenadores">
                            <img src={entrenador} alt="Imagen de entrenador" />
                            <h2>Gabriel Mazariegos</h2>
                            <p>Un entrenador personal de élite, especializado
                                 en diversas disciplinas, destaca por su compromiso 
                                 inquebrantable con el éxito de sus clientes. Su enfoque
                                  se basa en evaluaciones personalizadas meticulosas, explorando
                                   las aspiraciones y limitaciones individuales.</p>
                        </div>

                        <div class="entrenadores">
                            <img src={entrenador2} alt="Imagen de entrenador" />
                            <h2>David Canales</h2>
                            <p>Este entrenador personal de élite, con expertise en diversas disciplinas 
                                de acondicionamiento físico, se distingue por su dedicación al éxito de 
                                sus clientes. Su método se centra en evaluaciones personalizadas detalladas,
                                 abordando aspiraciones y limitaciones específicas.</p>
                        </div>

                        <div class="entrenadores">
                            <img src={entrenador} alt="Imagen de entrenador" />
                            <h2>Thomas</h2>
                            <p>Sobresaliendo en el entrenamiento personal de élite, 
                                este especialista destaca por su compromiso con el 
                                éxito de sus clientes. Su enfoque único se basa en 
                                evaluaciones personalizadas, explorando a fondo las 
                                aspiraciones y habilidades individuales.</p>
                        </div>

                        <div class="entrenadores">
                            <img src={entrenador} alt="Imagen de entrenador" />
                            <h2>Elias</h2>
                            <p>Un entrenador personal de élite,
                                 con experiencia en diversas disciplinas, 
                                 resalta por su compromiso inquebrantable.
                                  Su metodología se basa en evaluaciones personalizadas, 
                                  adentrándose en las aspiraciones y limitaciones de cada individuo.</p>
                        </div>

                        <div class="entrenadores">
                            <img src={entrenador} alt="Imagen de entrenador" />
                            <h2>Carlos</h2>
                            <p>Un instructor de aeróbicos altamente calificado, 
                                especializado en potenciar la salud cardiovascular,
                                dirigiendo a los clientes hacia metas de condición física 
                                mediante sesiones aeróbicas dinámicas, 
                                perfectamente ajustadas a sus necesidades individuales.</p>
                        </div>
                    </div>
                </div>
                
                
            </div>
            
        </div>
      </Page>
    )
}