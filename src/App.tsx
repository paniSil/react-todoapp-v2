import './App.css'
import Form from './components/Form'
import Tasks from './components/Tasks'
import Provider from './components/Provider'
import Actions from './components/Actions'
import { ToastContainer } from 'react-toastify'
import Timer from './components/Timer'
import { HexColorPicker } from 'react-colorful'
import { useState } from 'react'

function App() {
  const [color, setColor] = useState('#aabbcc')
  return (
    <>
      <Provider>
        <div className="container">
          <h1>Todo App</h1>
          <Form />
          <Tasks />
          <Actions />
        </div>
        <ToastContainer />
      </Provider>
      <Timer />
      <HexColorPicker color={color} onChange={setColor} />
    </>
  )
}

export default App
