import React from 'react';

const Exercise2 = () => {
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

  const palabra = 'POHAOB';
  const palabra1 = 'VCZO';
  const palabra2 = 'PCAPO';
  const linea = 14;

  let dataR = data[linea];
  let res = '';

  palabra.split('').forEach(letra => {
    dataR.forEach((value, key) => {
      if (letra === value) {
        res = `${res}${data[0][key]}`;
      }
    });
  });
  console.log(res);
  res = '';
  palabra1.split('').forEach(letra => {
    dataR.forEach((value, key) => {
      if (letra === value) {
        res = `${res}${data[0][key]}`;
      }
    });
  });

  console.log(res);
  res = '';

  palabra2.split('').forEach(letra => {
    dataR.forEach((value, key) => {
      if (letra === value) {
        res = `${res}${data[0][key]}`;
      }
    });
  });
  console.log(res);


  return (
    <div className="container">
      <a>sa</a>
    </div>
  );
};

export default Exercise2;
