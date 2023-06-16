import { useState, useEffect } from 'react'

export function getCurrentTime() {
  return new Date().toLocaleTimeString()
}

export function timeToPercent() {
  const total = 235959
  return Math.round((stringifyCurrentTime() * 100) / total)
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
