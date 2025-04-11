import './App.css'
import Form from './components/Form'
import Tasks from './components/Tasks'
import Provider from './components/Provider'
import Actions from './components/Actions'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <Provider>
      <div className="container">
        <h1>Todo App</h1>
        <Form />
        <Tasks />
        <Actions />
      </div>
      <ToastContainer />
    </Provider>
  )
}

export default App
