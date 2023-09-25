import React from 'react'

const ExercicioHeroCard = () => {
  return (
    <div className=' md:flex md:p-0 
    rounded-xl overflow-hidden p-6 bg-slate-800'>
     
       <div
       className="w-24 h-24 rounded-full mx-auto bg-cover bg-left md:w-48 md:h-auto
       md:rounded-none
       bg-[url(https://media.istockphoto.com/id/490671346/pt/foto/benjamin-franklin-com-%C3%B3culos-de-sol.jpg?b=1&s=612x612&w=0&k=20&c=yW_QoCY_UqlXCxJaEJzkTnNYd5C3sqQaD4_NT3y0S54=)]"
       ></div>
        <div className="grow md:py-8 text-center mt-8">
          <p className="text-lg text-white">"Me fale e eu esqueço. Me ensine e eu lembro. Me envolva e eu aprendo de verdade."</p>
          <p className="mt-3 font-bold text-sky-400">Benjamin Franklin</p>
          <p className="text-slate-500">Político, EUA</p>
        </div>
      
    </div>
  )
}

export default ExercicioHeroCard