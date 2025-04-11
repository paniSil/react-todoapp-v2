import { createContext } from 'react'
import { TaskInterface } from '../types/Task.interface'

interface ContextType {
  tasks: TaskInterface[]
  addTask: (task: TaskInterface) => void
  deleteTask: (id: string) => void
  deleteAllTasks: () => void
  clearCompletedTasks: () => void
  toggleTask: (id: string) => void
  completedTasksCount: number
}

const initialState: ContextType = {
  tasks: [],
  addTask: () => {},
  deleteTask: () => {},
  deleteAllTasks: () => {},
  clearCompletedTasks: () => {},
  toggleTask: () => {},
  completedTasksCount: 0
}

export const Context = createContext<ContextType>(initialState)