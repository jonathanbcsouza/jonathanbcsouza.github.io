import { useState, useEffect } from 'react'

export function showTime() {
  const [time, setTime] = useState('loading...')

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return time
}
