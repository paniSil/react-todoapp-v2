import { RiCloseFill, RiTodoFill } from 'react-icons/ri'
import { TaskInterface } from '../types/Task.interface'
import { FaCheck } from 'react-icons/fa'
import { useContext } from 'react'
import { Context } from '../context/Context'
import Box from '@mui/material/Box'
import { notifyCompleted, notifyDeleted, notifyUncompleted } from './Toasts'

interface TaskProps {
  task: TaskInterface
}

const Task = ({ task: { id, title, completed } }: TaskProps) => {
  const { deleteTask, toggleTask } = useContext(Context)

  const toggleNotify = (id: string) => {
    toggleTask(id)
    if (!completed) {
      notifyCompleted()
    } else {
      notifyUncompleted()
    }
  }

  const deleteNotify = (id: string) => {
    deleteTask(id)
    notifyDeleted()
  }

  return (
    <div className={`task ${completed ? 'task--completed' : ''}`}>
      <RiTodoFill className="task__icon" />
      <h2 className="task__title">{title}</h2>

      <RiCloseFill className="task__delete-btn" onClick={() => deleteNotify(id)} />
      <Box borderRadius="20%" className="task__check-btn">
        <FaCheck
          className="task__check-checkmark"
          onClick={() => toggleNotify(id)}
          style={{
            color: completed ? 'var(--complete-color)' : 'white',
            opacity: completed ? '1' : '0',
            transition: 'color 0.3s'
          }}
        />
      </Box>
    </div>
  )
}

export default Task
