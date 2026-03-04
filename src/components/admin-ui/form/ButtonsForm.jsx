import React from 'react'

const ButtonsForm = ({ onCancel }) => {
  return (
    <div className='inline-flex flex-col lg:flex-row gap-3 justify-end items-end ml-auto w-full mt-4'>
      <button className='rounded-xl px-4 py-2 bg-admin-background-400 text-white text-sm' >Cancelar</button>
      <button className='rounded-xl px-4 py-2 bg-admin-purple text-white text-sm flex items-center gap-x-2' type='submit'>
        <p>Enviar</p>
        <i className='ri-send-plane-2-line' />
      </button>
    </div>
  )
}

export default ButtonsForm