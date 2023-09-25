import React from 'react'

const ExercicioGridResponsivo = () => {
  return (
    <div className="p-3 flex flex-col gap-3 bg-gray-200 rounded-md">

      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 ">
        <div className="w-full h-60 bg-cover bg-center col-span-2 md:col-span-2 md:row-span-2 md:h-full
        bg-[url(https://images.pexels.com/photos/7746910/pexels-photo-7746910.jpeg?auto=compress&cs=tinysrgb&w=400)]"></div>
        <div className="w-full h-32 md:h-60 bg-cover bg-center 
        bg-[url(https://images.pexels.com/photos/5562758/pexels-photo-5562758.jpeg?auto=compress&cs=tinysrgb&w=400)]"></div>
        <div className="w-full h-32 md:h-60 bg-cover bg-center
        bg-[url(https://images.pexels.com/photos/6748977/pexels-photo-6748977.jpeg?auto=compress&cs=tinysrgb&w=400)]"></div>
      </div>

      <div>
        <h1 className="text-3xl font-bold">Título da Casa</h1>
        <div className="flex gap-2 mt-3">
          <button className="bg-green-600 px-3 py-1 rounded-full">Campo</button>
          <button className="bg-green-600 px-3 py-1 rounded-full">Moderno</button>
          <button className="bg-green-600 px-3 py-1 rounded-full">Piscina</button>
        </div>
      </div>
    </div>
  )
}

export default ExercicioGridResponsivo