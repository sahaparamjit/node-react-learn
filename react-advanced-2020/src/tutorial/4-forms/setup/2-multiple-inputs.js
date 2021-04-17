import React, { useState } from 'react'
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [people, setPeople] = useState([])
  const [person, setPerson] = useState({
    firstName: '',
    email: '',
    age: '',
    lastName: '',
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setPerson({ ...person, id: new Date().getTime().toString(), [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (person.firstName && person.email && person.age) {
      setPeople((prevPeople) => {
        return [...prevPeople, person]
      })
    } else {
      alert('All fields are mandatory!')
    }
    setPerson({ firstName: '', email: '', age: '' })
  }

  return (
    <>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='firstName'>First Name :</label>
            <input
              type='text'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='firstName'>Last Name :</label>
            <input
              type='text'
              name='lastName'
              value={person.lastName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email :</label>
            <input
              type='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Age :</label>
            <input
              type='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button className='btn' onClick={handleSubmit}>
            Submit Form
          </button>
        </form>
      </article>
      {people.map((person) => {
        return (
          <div className='item' key={person.id}>
            <h5>{person.firstName}</h5>
            <h5>{person.lastName}</h5>
            <a href={`mailto:` + person.email}>{person.email}</a>
            <p>{person.age}</p>
          </div>
        )
      })}
    </>
  )
}

export default ControlledInputs
