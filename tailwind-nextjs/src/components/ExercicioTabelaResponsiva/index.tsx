import React from 'react'

const ExercicioTabelaResponsiva = () => {
  return (
    <div className="">
      <table className="w-full mx-2">
        <thead >
          <tr className="text-left border-b border-gray-200 text-sm">
            <th className="py-2">Nome</th>
            <th className="hidden md:table-cell">Título</th>
            <th className="hidden md:table-cell">Email</th>
            <th>Função</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-left text-sm text-gray-400  border-b border-gray-200">
            <td className="py-2">
              <p className="font-bold text-black">Maria da Silva</p>
              <p className="block md:hidden">Cafezeira</p>
              <p className="block md:hidden">maria@hotmail.com</p>
              
            </td>
            <td className="hidden md:table-cell">Cafezeira</td>
            <td className="hidden md:table-cell">maria@hotmail.com</td>
            <td className="">Membro</td>
            <td className="text-blue-400">
              <a href='/'>Editar</a>
            </td>
            
          </tr>
          <tr className="text-left text-sm text-gray-400  border-b border-gray-200">
            <td className="py-2">
              <p className="font-bold text-black">Maria da Silva</p>
              <p className="block md:hidden">Cafezeira</p>
              <p className="block md:hidden">maria@hotmail.com</p>
              
            </td>
            <td className="hidden md:table-cell">Cafezeira</td>
            <td className="hidden md:table-cell">maria@hotmail.com</td>
            <td className="">Membro</td>
            <td className="text-blue-400">
              <a href='/'>Editar</a>
            </td>
            
          </tr>
          <tr className="text-left text-sm text-gray-400  border-b border-gray-200">
            <td className="py-2">
              <p className="font-bold text-black">Maria da Silva</p>
              <p className="block md:hidden">Cafezeira</p>
              <p className="block md:hidden">maria@hotmail.com</p>
              
            </td>
            <td className="hidden md:table-cell">Cafezeira</td>
            <td className="hidden md:table-cell">maria@hotmail.com</td>
            <td className="">Membro</td>
            <td className="text-blue-400">
              <a href='/'>Editar</a>
            </td>
            
          </tr>
          <tr className="text-left text-sm text-gray-400  border-b border-gray-200">
            <td className="py-2">
              <p className="font-bold text-black">Maria da Silva</p>
              <p className="block md:hidden">Cafezeira</p>
              <p className="block md:hidden">maria@hotmail.com</p>
              
            </td>
            <td className="hidden md:table-cell">Cafezeira</td>
            <td className="hidden md:table-cell">maria@hotmail.com</td>
            <td className="">Membro</td>
            <td className="text-blue-400">
              <a className =" " href='/'>Editar</a>
            </td>
            
          </tr>
         
        </tbody>
      </table>
    </div>
  )
}

export default ExercicioTabelaResponsiva