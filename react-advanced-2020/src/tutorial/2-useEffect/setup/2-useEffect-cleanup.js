import React, { useState, useEffect } from 'react'

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)
  console.log(size)

  const checkSize = () => {
    setSize(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', checkSize)
    console.log('useEffect')
    return () => {
      console.log('clean up')
      window.removeEventListener('resize', checkSize)
    }
  }, [])
  console.log('render')
  return <h2>useEffect cleanup</h2>
}

export default UseEffectCleanup
