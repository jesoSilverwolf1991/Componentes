import React from 'react';

class CalculadoraSimple extends React.Component {
  render() {
   
    const operacion = 13 + 3;

    return (
      <div className=''>
        <p className='font-bold grid justify-items-center m-5 '>El resultado de la operación 13 + 3 es: {operacion}</p>
      </div>
    );
  }
}

export default CalculadoraSimple;