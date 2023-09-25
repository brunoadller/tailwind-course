import React from 'react'

const Login = () => {
  return (
    
    <div className="mt-5 ">

    <h1 className="text-3xl font-bold text-center">Sistema de login</h1>

    <div className="my-6">
      <label 
      htmlFor='emailField' 
      className="block mb-2 text-lg">
        Endereço de e-mail
      </label>
      <input id = "emailField" className="
       bg-gray-800 
       w-full p-2
      text-lg
       rounded-md border border-gray-600 
        outline-yellow-500" type="email" />
    </div>

    <div className="mb-4">
      <label htmlFor='passwordField' 
      className="block mb-2 text-left"
      >Senha
      </label>
      <input id="passwordField" 
      className=" bg-gray-800 w-full px-3 py-2
      text-sm
       rounded-md border border-gray-400 
        outline-yellow-500 " type="password" />
    </div>

    <div className="my-6">
      <button className="text-white 
      block border-none bg-yellow-500 w-full rounded-md text-lg font-bold
      py-2">Entrar</button>
    </div>

    <div className="text-center text-gray-400">Não é membro? 
    <a className="text-yellow-500 font-bold ml-1 cursor-pointer">Faça seu cadastro agora</a>
    </div>
  </div>

  )
}

export default Login