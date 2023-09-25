import React from 'react'

const ExercicioButton = () => {
  return (
    <div className="w-screen h-screen p-5">
    <div
    className="bg-blue-500
     text-white rounded-md
    inline-block cursor-pointer
    px-5 py-2 border-none"
    >Clique aqui</div>

    <div 
    className="inline-block cursor-pointer 
    px-5 py-2 rounded-full border border-blue-500
     text-white ml-3"
    >
      Clique aqui
    </div>
  </div>
  )
}

export default ExercicioButton