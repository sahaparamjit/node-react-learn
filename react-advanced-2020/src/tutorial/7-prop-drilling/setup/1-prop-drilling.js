import React, { useState } from 'react'
import { data } from '../../../data'
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data)

  const handleRemove = (id) => {
    setPeople((prevPeople) => {
      return prevPeople.filter((person) => person.id !== id)
    })
  }
  return (
    <>
      <h2>prop drilling</h2>
      <List people={people} removeItem={handleRemove} />
    </>
  )
}

const List = ({ people, removeItem }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson key={person.id} {...person} handleRemove={removeItem} />
        )
      })}
    </>
  )
}

const SinglePerson = ({ id, name, handleRemove }) => {
  return (
    <>
      <div className='item'>
        <h3>{name}</h3>
        <button onClick={() => handleRemove(id)}>remove</button>
      </div>
    </>
  )
}

export default PropDrilling
