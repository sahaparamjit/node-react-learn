import React, { useState, useEffect } from 'react'
import { data } from '../../../data'
import { Link, useParams } from 'react-router-dom'
const Person = () => {
  const { id } = useParams()
  const filteredPerson = data.find((person) => person.id == id)
  return (
    <div>
      <h2>{filteredPerson.id}</h2>
      <h2>{filteredPerson.name}</h2>
      <Link to='/people' className='btn'>
        Back To People
      </Link>
    </div>
  )
}

export default Person
