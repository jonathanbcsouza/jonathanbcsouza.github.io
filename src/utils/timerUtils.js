import { useState, useEffect } from 'react'

function getCurrentTime() {
  return new Date().toLocaleTimeString()
}

export function stringifyCurrentTime() {
  const [time, setTime] = useState('loading...')
  const [hour, min, sec] = time.split(':')
  const stringifiedTime = hour + min + sec

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getCurrentTime())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return stringifiedTime
}
