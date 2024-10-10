import React from 'react';

const TarjetaPersonaje = ({ personaje }) => {
    const estadoClase = personaje.status.toLowerCase();

    return (
        <div className="tarjeta-personaje">
            <img src={personaje.image} alt={personaje.name} />
            <h2>{personaje.name}</h2>
            <div className={`estado ${estadoClase}`}>
                {personaje.status}
            </div>
            <p>{personaje.species}</p>
            <p>{personaje.origin.name}</p>
        </div>
    );
};

export default TarjetaPersonaje;
