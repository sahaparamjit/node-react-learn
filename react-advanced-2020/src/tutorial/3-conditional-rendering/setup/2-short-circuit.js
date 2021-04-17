import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [name, setName] = useState('Paramjit')
  const [isError, setIsError] = useState(false)

  return (
    <>
      <h1>{!isError ? name : `Error`}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>
        Toggle
      </button>
    </>
  )
}

export default ShortCircuit
