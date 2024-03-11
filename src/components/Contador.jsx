import React, { useState } from 'react';

const Contador = () => {
  const [contador, setContador] = useState(0);

  const avanzarContador = () => {
    setContador(contador + 1);
  };

 

  return (
    <div className='border-4 rounded-lg w-70 grid-cols-2 m-5 p-4 grid justify-items-center border-black'> 
      <h2 className='m-6 grid justify-items-center font-mono text-[30px] '>Contador: {contador}</h2>
      <button className='m-5 jujustify-items-center border border-black rounded-lg w-60 p-4 hover:bg-blue-100 font-mono text-[30px]  ' onClick={avanzarContador}>Avanzar</button>
      
    </div>
  );
};

export default Contador;
