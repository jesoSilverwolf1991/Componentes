import React from 'react'

const Articulo = ({titulo, mensaje}) => {
  return (
    <>
      <h1 className='font-bold grid justify-items-center m-5 '>{titulo}</h1>
      <p className='m-5 ml-5'>{mensaje}</p>
    </>
  )
}

export default Articulo