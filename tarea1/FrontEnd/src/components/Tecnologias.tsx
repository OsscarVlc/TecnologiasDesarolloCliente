
function Tecnologias() {
    const tecnologias = ['HTML', 'CSS', 'TypeScript', 'Bootstrap', 'Node.js', 'Express', 'MongoDB', 'Dgraph', 'Cassandra', 'Python', 'C', 'Power BI', 'Git'];
    return (

        <div className="container bloque">

        <h2>Tecnologías y Herramientas</h2>

        <div className="d-flex flex-wrap gap-2">

            {/**
             * mapear el array de tecnologias para no escribir todo uno por uno
             */}
            {tecnologias.map((tecnologia) => (
                <span className="badge bg-info" key={tecnologia}>
                    {tecnologia}
                </span>
            ))}

        </div>

    </div>
    )
}

export default Tecnologias;