import React from 'react'

const Flexbox = () => {
  return (
    <div className="flex flex-col p-5 gap-3 mt-4 sm:flex-row">
      <div className="grow rounded-md bg-blue-500 text-white p-4">01</div>
      <div className="grow order-first rounded-md bg-blue-500 text-white p-4">02</div>
      <div className="grow rounded-md bg-blue-500 text-white p-4">03</div>
      <div className="grow rounded-md bg-blue-500 text-white p-4">04</div>
    </div>
  )
}

export default Flexbox