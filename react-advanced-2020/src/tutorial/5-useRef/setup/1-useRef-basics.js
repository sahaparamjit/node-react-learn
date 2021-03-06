import React, { useEffect, useRef } from 'react'

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(refContainer.current)
  }

  console.log(refContainer)

  useEffect(() => {
    console.log(refContainer.current)
    refContainer.current.focus()
  })

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <input className='form-control' type='text' ref={refContainer} />
        <button className='btn' type='submit'>
          Submit
        </button>
      </form>
    </>
  )
}

export default UseRefBasics
