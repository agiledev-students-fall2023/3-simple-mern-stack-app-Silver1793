// import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function AboutMe() {
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [image, setImage] = useState('')

  const fetchMessages = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/aboutMe`)
      .then(response => {
        const messages = response.data.message
        const img = response.data.img
        setImage(img)
        setMessage(messages)
      })
      .catch(err => {
        const errMsg = JSON.stringify(err, null, 2)
        setError(errMsg)
      })
  }
  useEffect(() => {
    fetchMessages()
  }, [])

  return (
    <div>
      <h1>About Me</h1>
      <p>{message}</p>
      <img style={{ width: 225, height: 300 }} src={image} alt="Example" />
    </div>
  )
}
