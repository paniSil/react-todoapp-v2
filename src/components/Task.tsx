import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri'
import { TaskInterface } from '../types/Task.interface'
import { FaCheck } from 'react-icons/fa'
import { useContext } from 'react'
import { Context } from '../context/Context'

interface TaskProps {
  task: TaskInterface
  //onDeleteTask: (id: number) => void
  //onToggleTask: (id: number) => void
}

const Task = ({ task: { id, title, completed } }: TaskProps) => {
  const { deleteTask, toggleTask } = useContext(Context)
  return (
    <div className={`task ${completed ? 'task--completed' : ''}`}>
      {/* <div className="task__id">{id}</div> */}
      <RiTodoFill className="task__icon" />
      <h2 className="task__title">{title}</h2>
      {/* <div className="task__completed">{completed.toString()}</div> */}
      <RiDeleteBin2Line className="task__delete-btn" onClick={() => deleteTask(id)} />
      <FaCheck
        className="task__check-btn"
        onClick={() => toggleTask(id)}
        style={{
          color: completed ? 'var(--complete-color)' : 'white'
        }}
      />
    </div>
  )
}

export default Task
