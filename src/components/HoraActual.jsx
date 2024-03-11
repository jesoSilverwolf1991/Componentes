import React from 'react';

class Saludo extends React.Component {
  render() {
    const horaActual = new Date().getHours();
    let saludo;

    if  (horaActual < 12) {
      saludo = "¡Buenos días ";
    } else {
      saludo = "¡Buenas tardes";
    }
    

    return (
      <div className='font-serif grid justify-items-center'>
        <h1>{saludo}, {this.props.nombre}!</h1>
      </div>
    );
  }
}

export default Saludo;
