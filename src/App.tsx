import './App.css'
import Form from './components/Form'
import Tasks from './components/Tasks'
import Provider from './components/Provider'
import Actions from './components/Actions'

function App() {
  return (
    <Provider>
      <div className="container">
        <h1>Todo App</h1>
        <Form />
        <Tasks />
        <Actions />
      </div>
    </Provider>
  )
}

export default App
