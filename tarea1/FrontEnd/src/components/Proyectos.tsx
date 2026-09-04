function Proyectos() {
    return (
        <div className="container bloque">

            <h2>Proyectos Destacados</h2>

        <div className="row">

            <div className="col-md-4">
                <div className="tarjeta">
                    <h3><b>ITESO reserve</b></h3>
                    <h4>Sistema de reserva de espacios universitarios</h4>
                    <p>Plataforma full-stack para gestión y reservación de salas en ITESO.
                        Incluye autenticación con JWT, manejo de sesiones, panel de administración</p>
                </div>
            </div>

            <div className="col-md-4">
                <div className="tarjeta">
                    <h3><b>PlaynSeeK</b></h3>
                    <h4>Plataforma para encontrar compañeros de juego</h4>
                    <p>plataforma de matchmaking para gamers ("Tinder para gamers"), desarrollada en equipo con Node.js,
                         Express, TypeScript, MongoDB y Dgraph. Implementé autenticación JWT, sockets en tiempo real (chat),
                          APIs REST documentadas con Swagger, pruebas unitarias con Jest y despliegue en AWS EC2 con Docker.</p>
                </div>
            </div>

            <div className="col-md-4">
                <div className="tarjeta">
                    <h3><b>Plataforma de Seguimiento de Hábitos y Bienestar</b></h3>
                    <p>Este proyecto implica la creación del diseño e implementación de una plataforma de seguimiento 
                        de hábitos y bienestar, la cual está centrada en el almacenamiento y consulta de datos vinculados a 
                        hábitos personales, rutinas, entre otros. 
                        La solución integra tres bases de datos no relacionales, aprovechando las fortalezas de cada una 
                        según el tipo de información y de consulta requerida, se utilizo Cassandra, MongoDB y Dgraph</p>
                </div>
            </div>

        </div>

    </div>
    );
}   

export default Proyectos;