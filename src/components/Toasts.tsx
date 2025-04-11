import { toast } from 'react-toastify'

export const notifyCompleted = () => {
  toast.success("🦄 You've completed a task!", {
    position: 'top-right',
    autoClose: 1000
  })
}

export const notifyUncompleted = () => {
  toast.warning('Task is not completed', {
    position: 'top-right',
    autoClose: 1000
  })
}

export const notifyDeleted = () => {
  toast.error('Task is deleted', {
    position: 'top-right',
    autoClose: 1000
  })
}
