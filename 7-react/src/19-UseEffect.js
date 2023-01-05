import React, { useEffect, useState } from 'react'

export default function Maryam () {
  const [mount, setMount] = useState(true)

  return (
    <div>
      <button onClick={() => setMount(!mount)}>
        {mount ? 'UnMount' : 'Mount'}
      </button>
      {mount && <MyComponent />}
    </div>
  )
}

function MyComponent () {
  const [count, setCount] = useState(0)
  const [state, setState] = useState(1)
  const [users, setUsers] = useState([])

  // cDM, cDU, cWU
  useEffect(() => {
    // console.log('State', state)
    const timeoutId = setTimeout(() => {
      setState(state + 1)
    }, 3000)

    console.log('Effect', timeoutId, state)

    return () => {
      console.log('CleanUp', timeoutId, state)
      clearTimeout(timeoutId)
    }
  }, [state])

  // cDM
  useEffect(() => {
    console.log('ComponentDidMount')
  }, [])

  // cDM, cDU
  useEffect(() => {
    console.log('Count', count)
  }, [count])

  //cWU
  useEffect(() => {
    return () => {
      console.log('componentWillUnmount')
    }
  }, [])

  // cDM, cWU
  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller

    fetch('https://jsonplaceholder.ir/users', { signal })
      .then(response => response.json())
      .then(data => setUsers(data))

    return () => {
      controller.abort()
    }
  }, [])

  // console.log('render')

  return (
    <div>
      <ol>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
      <hr />
      State: {state}
      <hr />
      Count: {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}
