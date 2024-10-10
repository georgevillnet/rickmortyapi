import TarjetaPersonaje from './TarjetaPersonaje';

const ListaPersonajes = ({ personajes }) => {
    return (
        <div className="lista-personajes">
            {personajes.length === 0 ? (
                <p>No se encontraron personajes</p>
            ) : (
                personajes.map(personaje => (
                    <TarjetaPersonaje key={personaje.id} personaje={personaje} />
                ))
            )}
        </div>
    );
};

export default ListaPersonajes;
