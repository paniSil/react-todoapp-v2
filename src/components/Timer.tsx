import { useEffect, useState } from 'react'
import { useIdleTimer } from 'react-idle-timer'

const Timer = () => {
  const [state, setState] = useState<string>('Active')
  const [count, setCount] = useState<number>(0)
  const [remaining, setRemaining] = useState<number>(0)

  const onIdle = () => {
    setState('Idle')
  }

  const onActive = () => {
    setState('Active')
  }

  const onAction = () => {
    setCount(count + 1)
  }

  const { getRemainingTime } = useIdleTimer({
    onIdle,
    onActive,
    onAction,
    timeout: 10_000,
    throttle: 500
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(Math.ceil(getRemainingTime() / 1000))
    }, 500)

    return () => {
      clearInterval(interval)
    }
  })

  return (
    <>
      <div className={state === 'Idle' ? 'overlay' : 'hidden'}>
        <div className={state === 'Idle' ? 'overlay-info' : 'hidden'}>
          <h2>Doing tasks?</h2>
          <img
            src="../../public/cat-works.gif"
            alt="working cat gif"
            className={state === 'Idle' ? 'overlay-img' : 'hidden'}
          />
          <p className="overlay-text">The app is in {state} mode</p>
        </div>
      </div>

      <h3>{remaining} seconds remaining</h3>
    </>
  )
}

export default Timer
