import React, { useState } from 'react'

const UseStateCounter = () => {
  const [count, setCount] = useState(0)
  const reset = () => {
    setCount(0)
  }

  const delayedCount = () => {
    setTimeout(() => {
      // setCount(count + 1)
      setCount((prevState) => {
        return prevState + 1
      })
    }, 2000)
  }
  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>Regular Counter</h2>
        <h1>{count}</h1>
        <button className='btn' onClick={() => setCount(count - 1)}>
          Decrease
        </button>
        <button className='btn' onClick={reset}>
          Reset
        </button>
        <button className='btn' onClick={() => setCount(count + 1)}>
          Increase
        </button>
        <h2>More Complex Counter</h2>
        <h1>{count}</h1>
        <button className='btn' onClick={delayedCount}>
          Increase Later
        </button>
      </section>
    </>
  )
}

export default UseStateCounter
