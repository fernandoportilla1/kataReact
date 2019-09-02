import React from 'react';

import { useLetras } from '../Hooks/useLetras';

const Dibujar = ({ items }) => {
  return items.map((item, key) => {
    return (
      <span key={key}>{item}</span>
    );
  });
};

const Exercise1 = () => {
  const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  let { data, loading } = useLetras(letras, []);

  return (
    <div className="container">
      {
        loading ? (<h1>Loading...</h1>) : (
          <ul>
            {
              data.map((items, index) => {
                return (
                  <li key={index}>
                    <Dibujar items={items} />
                  </li>
                );
              })
            }
          </ul>
        )
      }
    </div>
  );
};

export default Exercise1;
