function Hobbies () {
    const ListaHobbies = [
        { titulo: 'Campismo', imagen: '/assets/img/nevado.jpeg', descripcion: 'Me gusta salir a acampar y disfrutar de la naturaleza, especialmente en zonas montañosas.' },
        { titulo: 'Minecraft Técnico', imagen: '/assets/img/minecraft.png', descripcion: 'Disfruto diseñar granjas automáticas y explorar mecánicas del juego junto a mis amigos.' },
        { titulo: 'Programación', imagen: '/assets/img/reserve.png', descripcion: 'Me gusta desarrollar proyectos escolares y personales para aprender nuevas tecnologías.' },
        { titulo: 'Fotografía', imagen: '/assets/img/rapel.jpeg', descripcion: 'Me encanta capturar momentos especiales con mi celular, especialmente en mis viajes de hiking.' },
        { titulo: 'Hiking', imagen: '/assets/img/ceboruco.jpeg', descripcion: 'Me encanta explorar trails y disfrutar de la naturaleza. Mencion honorable para Explora Iteso.' }
    ];

    return(
        <div className="container bloque">

            <h2>Intereses y Hobbies</h2>

        <div className="row  g-4">
            
            {ListaHobbies.map(hobbie => (
                <div className="col-md-4" key={hobbie.titulo}>
                    <div className="hobby-card">

                        <img src={hobbie.imagen} alt={hobbie.titulo} className="hobby-img" />
                        <div className="hobby-body">
                            <h4>{hobbie.titulo}</h4>
                            <p>{hobbie.descripcion}</p>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    </div>
    );
};

export default Hobbies;