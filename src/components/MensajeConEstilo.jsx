import React from 'react';

const MensajeConEstilo = ({ mensaje, color, tamaño }) => {
  const estilo = {
    color: color || 'blue', 
    fontSize: tamaño || '25px' 
  };

  return (
    <div style={estilo} className='font-bold grid m-5 justify-items-center'>
   <p style={color} fontSize={tamaño} > Cuando haces pop, ya no hay stop»  Pringles</p>
      {mensaje}
    </div>
  );
};

export default MensajeConEstilo;
