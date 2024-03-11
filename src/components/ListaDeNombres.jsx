import React from 'react'

const ListaDeNombres = ({nombres}) => {
  return (
    <div className='font-bold m-5 p-5 '>
        <ul>
            <h1 className='text-[30px] underline grid justify-items-center'>Lista de alumnos </h1>
      {nombres.map((nombre, index) => (
        <li className='grid justify-items-center p-3 text-[20px]' key={index}>{nombre}</li>
      ))}
    </ul>
    </div>
    
  )
}

export default ListaDeNombres