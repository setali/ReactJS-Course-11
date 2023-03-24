import Counter from './Counter'
import Post from './Post'
import Todos from './Todos'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <hr />
        <Counter />
        <hr />

        <Todos />

        <hr />

        <Post />
      </header>
    </div>
  )
}

export default App
