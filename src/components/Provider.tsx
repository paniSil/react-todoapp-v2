import { Context } from '../context/Context'
import { MOCK_TASKS } from '../data/mock-tasks'

import { TaskInterface } from '../types/Task.interface'
import { useState } from 'react'
import { notifyCompleted } from './Toasts'
import { toast } from 'react-toastify'

interface ProviderProps {
  children: React.ReactNode
}

const Provider = ({ children }: ProviderProps) => {
  const [tasks, setTasks] = useState<TaskInterface[]>(MOCK_TASKS)

  const addTask = (task: TaskInterface) => {
    setTasks([...tasks, task])
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const deleteAllTasks = () => {
    setTasks([])
    toast.error('All tasks were deleted', {
      position: 'top-right',
      autoClose: 2000
    })
  }

  const clearCompletedTasks = () => {
    setTasks(tasks.filter((task) => !task.completed))
    toast('Completed tasks were removed from the list', {
      position: 'top-right',
      autoClose: 2000
    })
  }

  const toggleTask = (id: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const completedTasksCount = tasks.filter((task) => task.completed).length

  return (
    <Context.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        deleteAllTasks,
        clearCompletedTasks,
        toggleTask,
        completedTasksCount
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Provider
