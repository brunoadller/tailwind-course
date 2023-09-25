import React from 'react'

const CardInvite = () => {
  return (
   
    <div className="bg-white w-96 p-4 rounded-md ">

    <div className="">

      <div className="inline-block">
        <img
        className="w-14 h-14 rounded-full"
        src="https://images.pexels.com/photos/18305042/pexels-photo-18305042/free-photo-of-preto-e-branco-p-b-moda-tendencia.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
      </div>

      <div className="inline-block ml-5">
        <h1 className="font-semibold text-black pb-2">Manuela Silva</h1>
        <p className="text-gray-400">Te mandou um convite!</p>
      </div>

    </div>

    <div className="mt-4">
      <button 
      className="bg-blue-800 rounded-md
       px-5 py-2  text-white"
       >Aceitar</button>
      <button 
      className="bg-white
      border border-gray-200 ml-3
      rounded-md px-5 py-2    text-black"
      >Negar</button>
    </div>
  </div>
  )
}

export default CardInvite