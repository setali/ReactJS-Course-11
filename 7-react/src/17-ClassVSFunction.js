import React, { useState } from 'react'

export default function FunctionBase () {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      Counter: {counter}
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  )
}

// export default class ClassBase extends Component {
//   state = {
//     counter: 0
//   }
//   render () {
//     return (
//       <div>
//         Counter: {this.state.counter}
//         <button
//           onClick={() => this.setState({ counter: this.state.counter + 1 })}
//         >
//           +
//         </button>
//       </div>
//     )
//   }
// }
