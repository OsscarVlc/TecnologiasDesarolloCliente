import { useState } from 'react';

function ContactForm() {
    // useState(valorInicial) regresa un ARRAY de 2 elementos:
    //   0 el cual es el valor actual del estado y 1 la función para actualizar ese valor
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    // formData es unobjeto con los 3 campos y estan todos vacios
    // setFormData  es la forma correcta de cambiar formData

    // Estado booleano para indicar si se envio el formulario para mandar o no el mensaje de exito
    const [enviado, setEnviado] = useState(false);

    // React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> son tipos que le dice  a ts que puede venir en input o textarea
    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {

        // e.target es el elemento HTML real que disparó el evento
        //   name  sera el nombre del campo (name, email o message) que viene del atributo name de cada input
        //   value sera el valor actual del input o textarea, lo que el usuario escribió
        const { name, value } = e.target;

        // Actualizamos el estado completo, pero solo cambiando el campo correspondiente
        //   ...formData  se utiliza spread para copiar todas las propiedades del objeto formData en un nuevo objeto.
        //   [name]: value se usa para actualizar dinamicamente la propiedad del objeto que coincida con el valor de name y asigna el value.
        setFormData({ ...formData, [name]: value });
    }


    // Funcion que se ejecuta cuando el usuario da clic en el boton de enviar
    // React.FormEvent es un tipo que le dice a ts que el evento es de un formulario
    function handleSubmit(e: React.FormEvent) {

        // Previene que el formulario se envie de la forma tradicional (recargando la pagina)
        e.preventDefault();


        console.log('Datos del formulario:', formData);

        // aqui es donde se cambia el estado de enviado a true para mostrar el mensaje de exito
        setEnviado(true);
    }


    if (enviado) {
        return (
            <div className="container contacto">
                <h1>¡Mensaje enviado!</h1>
                <p>
                    Gracias por contactarme. He recibido tu mensaje y
                    responderé tan pronto como sea posible.
                </p>
            </div>
        );
    }

    // Si enviado es false, se muestra el formulario de contacto
    return (
        <div className="container contacto">

            <h1>Contacto</h1>

            <p>
                Si deseas comunicarte conmigo para alguna oportunidad laboral,
                proyecto o colaboración, puedes enviarme un mensaje.
            </p>

            {/*
              onSubmit reemplaza al "action"/"method" del formulario tradicional y Se ejecuta cuando el usuario da clic en el boton de enviar.
            */}
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    className="form-control"
                    placeholder="Correo electrónico"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <textarea
                    className="form-control"
                    rows={5}
                    placeholder="Escribe tu mensaje"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>

                <button type="submit" className="btn btn-info mt-3">
                    Enviar
                </button>

            </form>

        </div>
    );
}

export default ContactForm;