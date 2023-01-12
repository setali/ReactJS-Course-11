import React, { useEffect, useState } from 'react'

export default function HooksRules () {
  const [count, setCount] = useState(1)

  // if (count % 2) {
  //   return 'salam'
  // }

  //   if (count % 2) {
  //     const [state, setState] = useState(10)
  //   }

  //   function func () {
  //     const [qoli, setQoli] = useState()
  //   }

  //   for (let i = 0; i < 5; i++) {
  //     const [ali, setAli] = useState()
  //   }

  //   useEffect(() => {
  //     const [eli, setEli] = useState()
  //   }, [])

  const [state, setState] = useState(10)

  const [fati, setFati] = useState()

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <hr />
      {/* State: {state} */}
    </div>
  )
}

// [
//   [value, setter], => count
//   [value, setter]  => fati
// ]
