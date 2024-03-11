import React from 'react';

function Saludo(props) {
  return (
    <div>
      <p className='font-bold text-[50px]  bg-blue-500 text-blue-100 grid justify-items-center'>¡Hola juan {props.nombre}!</p>
    </div>
  );
}

export default Saludo;
