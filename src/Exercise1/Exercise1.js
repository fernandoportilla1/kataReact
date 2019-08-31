import React from 'react';

const Exercise1 = () => {
  const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let data = [];

  for (let i = 0; i < letras.length; i++) {
    data[i] = [];
    for (let j = i; j < letras.length; j++) {
      data[i].push(letras[j]);
    }
    for (let k = 0; k < i; k++) {
      data[i].push(letras[k]);
    }
  }

  return (
    <div className="container">
      {
        data.map(items => {
          return (
            <ul>
              <li>
                {
                  items.map((item, key) => {
                    return (
                      <span key={key}>{item}</span>
                    );
                  })
                }
              </li>
            </ul>
          );
        })
      }
    </div>
  );
};

export default Exercise1;
