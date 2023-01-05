import { useState, useEffect } from 'react'

// 12ACb4   => 0
// 45BF23   => 1

export default function AdvanceStateEffect () {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setInterval(() => {
      console.log('salam', count)
      setCount(c => c + 1)
    }, 1000)
  }, [])

  return <div>Count: {count}</div>
}
