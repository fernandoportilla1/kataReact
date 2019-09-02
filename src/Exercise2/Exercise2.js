import React, { useRef } from 'react';

import { useLetras } from '../Hooks/useLetras';

const Exercise2 = () => {
  const inputIndicador = useRef(null);
  const inputClave = useRef(null);
  const inputRespuesta = useRef(null);
  const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  let { data, loading } = useLetras(letras, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const indicador = inputIndicador.current.value;
    const clave = inputClave.current.value;

    let dataR = data[indicador];
    let respuesta = '';

    clave.toUpperCase().split('').forEach(letra => {
      dataR.forEach((value, key) => {
        if (letra === value) {
          respuesta = `${respuesta}${data[0][key]}`;
        }
      });
    });
    inputRespuesta.current.value = respuesta;
  };

  return (
    <div className="container">
      {
        loading ? (<h1>Loading...</h1>) : (
          <form onSubmit={handleSubmit}>
            <label>Indicador</label>
            <input type="number" ref={inputIndicador} placeholder="14" required />
            <label>Clave</label>
            <input type="text" ref={inputClave} placeholder="POHAOB" required />
            <label>Respuesta</label>
            <input type="text" ref={inputRespuesta} placeholder="...." disabled />
            <button className="btn btn-primary" type="submit">
              Decodificar
            </button>
          </form>
        )
      }
    </div>
  );
};

export default Exercise2;
