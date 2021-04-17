import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users/sahaparamjit'
const MultipleReturns = () => {
  const [loading, setLoading] = useState('Loading')
  const [error, setError] = useState('')
  const [user, setUser] = useState('default')
  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json()
        }
        setLoading('')
        setError('Error while fetching url')
        throw new Error(resp.statusText)
      })
      .then((user) => {
        const { login } = user
        setUser(login)
        setLoading('')
      })
      .catch((error) => {
        setError('Error while fetching url')
      })
  }, [])
  return <h3>{loading || error || user}</h3>
}

export default MultipleReturns
