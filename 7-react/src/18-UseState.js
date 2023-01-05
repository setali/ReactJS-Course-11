import React, { useState } from 'react'

export default function UseState () {
  const [counter, setCounter] = useState(1)
  const [state, setState] = useState(
    () => (9999999n ** 999999n).toString().length
  )

  // console.log(`Counter: ${counter} - State: ${state}`)

  return (
    <div>
      State: {state}
      <button onClick={() => setState(state + 1n)}>+</button>
      <hr />
      Counter: {counter}
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  )
}

// export default function UseState() {

//     const state = useState(10)

//     console.log(state[0])
//     // console.log(state[1])

//     return (
//     <div>
//         Value: {state[0]}
//         <button onClick={() => state[1](state[0] + 1)}>+</button>
//     </div>
//     )
// }
