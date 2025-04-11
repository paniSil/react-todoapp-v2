import { useContext } from 'react'
import { Context } from '../context/Context'
import { RiCheckboxCircleLine, RiDeleteBin5Line } from 'react-icons/ri'
import Button from './Button'

const Actions = () => {
  const { deleteAllTasks, clearCompletedTasks, completedTasksCount } = useContext(Context)

  const completedTasksExist = completedTasksCount > 0
  return (
    <div className="tasks__actions">
      <Button
        title="Reset All Todos"
        onClick={clearCompletedTasks}
        disabled={!completedTasksExist}
        type="button"
        className="reset-all-btn"
      >
        <RiCheckboxCircleLine style={{ color: 'white', fontSize: '1.5rem' }} />
      </Button>
      <Button title="Delete All Todos" onClick={deleteAllTasks} type="button" className="delete-all-btn">
        <RiDeleteBin5Line style={{ color: 'white', fontSize: '1.5rem' }} />
      </Button>
    </div>
  )
}

export default Actions
