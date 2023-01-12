import React, { useEffect, useState, useCallback } from 'react'

export default function App () {
  const [count, setCount] = useState(0)
  const [height, setHeight] = useState()

  useEffect(() => {
    setInterval(() => setCount(c => c + 1), 1000)
  }, [])

  const myInputRef = useCallback(node => {
    node?.focus()
  }, [])

  const myHeighRef = useCallback(node => {
    node && setHeight(node.getBoundingClientRect().height)
  }, [])

  return (
    <div>
      <h2 ref={myHeighRef}>Hello</h2>
      Height: {height}
      <hr />
      <div>
        Count: <span style={{ backgroundColor: 'green' }}>{count}</span>
      </div>
      <input ref={myInputRef} />
    </div>
  )
}
