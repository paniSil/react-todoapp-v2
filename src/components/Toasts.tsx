import { toast } from 'react-toastify'

export const notifications = {
  completed: () => {
    toast.success("🦄 You've completed a task!", {
      position: 'top-right',
      autoClose: 1000
    })
  },
  uncompleted: () => {
    toast.warning('Task is not completed', {
      position: 'top-right',
      autoClose: 1000
    })
  },
  deleted: () => {
    toast.error('Task is deleted', {
      position: 'top-right',
      autoClose: 1000
    })
  },
  removeCompletedTasks: () => {
    toast('Completed tasks were removed from the list', {
      position: 'top-right',
      autoClose: 2000
    })
  },
  deleteAllTasks: () => {
    toast.error('All tasks were deleted', {
      position: 'top-right',
      autoClose: 2000
    })
  }
}
