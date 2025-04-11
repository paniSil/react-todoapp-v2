import { useContext } from 'react'
import Task from './Task'
import { Context } from '../context/Context'

const Tasks = () => {
  const { tasks, completedTasksCount } = useContext(Context)

  return (
    <div className="tasks">
      {tasks.length === 0 && <p className="tasks__empty">No tasks for today</p>}
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
      {completedTasksCount > 0 && (
        <div className="tasks__message">
          You have completed {completedTasksCount} {completedTasksCount === 1 ? 'task' : 'tasks'}
        </div>
      )}
    </div>
  )
}

export default Tasks
