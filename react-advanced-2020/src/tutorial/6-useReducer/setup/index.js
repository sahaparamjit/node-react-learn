import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'
import { reducer } from './reducer'

const defaultState = {
  people: data,
  isModalOpen: false,
  modalContent: '',
}
const Index = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const item = { id: new Date().getTime().toString(), name }
    if (name) {
      dispatch({ type: 'ADD_ITEM', item: item })
    } else {
      dispatch({ type: 'NO_VALUE' })
    }
  }

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_ITEM', id: id })
  }

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' })
  }

  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit} className='form'>
        <div className='form-control'>
          <label htmlFor='name'>Name :</label>
          <input
            type='text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit' className='btn'>
          Submit
        </button>
      </form>
      {state.people.map((person) => {
        return (
          <div className='item' key={person.id}>
            <h4>{person.name}</h4>
            <button onClick={() => handleRemove(person.id)}>remove</button>
          </div>
        )
      })}
    </>
  )
}

export default Index
