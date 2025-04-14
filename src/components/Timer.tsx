import { useCallback, useEffect, useRef, useState } from 'react'
import { useIdleTimer } from 'react-idle-timer'

const Timer = () => {
  // stopwatch
  const INTERVAL = 10

  const formatTime = (value: number) => {
    const hours = Math.floor((value / (100 * 60 * 60)) % 60)
    const minutes = Math.floor((value / (100 * 60)) % 60)
    const seconds = Math.floor((value / 100) % 60)

    return `${hours}h ${minutes}m ${seconds}s`
  }

  const timeRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [time, setTime] = useState(0)

  const startTimer = useCallback(() => {
    timeRef.current = setInterval(() => {
      setTime((prev) => prev + 1)
    }, INTERVAL)
  }, [])

  const resetTimer = useCallback(() => {
    if (timeRef.current) {
      clearInterval(timeRef.current)
      timeRef.current = null
    }
    setTime(0)
  }, [])

  // react-idle-timer
  const [state, setState] = useState<string>('Active')
  const [count, setCount] = useState<number>(0)
  const [remaining, setRemaining] = useState<number>(0)

  const onIdle = () => {
    setState('Idle')
    startTimer()
  }

  const onActive = () => {
    setState('Active')
    resetTimer()
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
          <p>Hopefully you're working on your tasks for: </p>
          <p>{formatTime(time)}</p>
        </div>
      </div>

      <h3>{remaining} seconds remaining</h3>
    </>
  )
}

export default Timer
