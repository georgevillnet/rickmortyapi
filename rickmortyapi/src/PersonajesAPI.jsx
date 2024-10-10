import React, { useState, useEffect } from 'react';

const PersonajesAPI = ({ busqueda, setPersonajes, setHayMas }) => {
    const [pagina, setPagina] = useState(1);
    const [cargando, setCargando] = useState(false);

    const cargarPersonajes = async (nuevaBusqueda = false) => {
        if (cargando) return;

        setCargando(true);
        let url = `https://rickandmortyapi.com/api/character?page=${pagina}`;

        if (busqueda) {
            url += `&name=${busqueda}`;
        }

        const respuesta = await fetch(url);
        const data = await respuesta.json();

        if (data.error) {
            setPersonajes([]);
            setHayMas(false);
        } else {
            if (nuevaBusqueda) {
                setPersonajes(data.results);
            } else {
                setPersonajes(prevPersonajes => [...prevPersonajes, ...data.results]);
            }
            setHayMas(data.info.next !== null);
        }

        setPagina(prevPagina => prevPagina + 1);
        setCargando(false);
    };

    useEffect(() => {
        cargarPersonajes(true);
    }, []);

    useEffect(() => {
        setPagina(1);
        setHayMas(true);
        cargarPersonajes(true);
    }, [busqueda]);

    return { cargarPersonajes, cargando };
};

export default PersonajesAPI;
