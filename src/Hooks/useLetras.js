import { useEffect, useState } from 'react';

export const useLetras = (letras, defaultData) => {
  const [data, setData] = useState(defaultData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    for (let i = 0; i < letras.length; i++) {
      data[i] = [];
      for (let j = i; j < letras.length; j++) {
        data[i].push(letras[j]);
      }
      for (let k = 0; k < i; k++) {
        data[i].push(letras[k]);
      }
      setData(data);
      setLoading(false);
    }
  }, [letras]);

  return { data, loading };
};
