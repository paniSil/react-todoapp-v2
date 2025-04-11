import React, { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Context } from '../context/Context'

const Form = () => {
  const [title, setTitle] = useState('')
  const { addTask } = useContext(Context)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTitle('')
    const trimmedTitle = title.trim()
    if (!trimmedTitle) return

    addTask({
      id: uuidv4(),
      title: trimmedTitle,
      completed: false
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter new task" value={title} onChange={handleInputChange} />
      <button type="submit" title="Submit form">
        Save
      </button>
    </form>
  )
}

export default Form
