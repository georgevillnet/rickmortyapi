import React, { useState } from 'react';
import ListaPersonajes from './ListaPersonajes';
import PersonajesAPI from './PersonajesAPI';
import TarjetaPersonaje from './TarjetaPersonaje';
import Logo1 from './Logo1';
import LineaDelgada from './LineaDelgada';
import './App.css';

const App = () => {
  const [personajes, setPersonajes] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [hayMas, setHayMas] = useState(true);

  const manejarCambioBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  const { cargarPersonajes, cargando } = PersonajesAPI({
    busqueda,
    setPersonajes,
    setHayMas,
  });

  return (
    <>
      <Logo1 ancho="232px" largo="140px" margentop="0px" />
      <LineaDelgada />
      <div className='buscadorcontenido'>

        <input className='buscador'
          type="text"
          placeholder="Troba un personatge"
          value={busqueda}
          onChange={manejarCambioBusqueda}
        />


      </div>

      <div className='cajalista'><p className='letracaja'>Llista de personatges</p></div>

      <container>
        <ListaPersonajes personajes={personajes} />
      </container>
      {hayMas && !cargando && (
        <div className="boton-container">
          <button onClick={() => cargarPersonajes(false)} className="boton-mostrar-mas">
            Mostrar más
          </button>
        </div>
      )}


    </>
  );
};

export default App;
