import { useContext } from 'react'
import UserContext from '../../contexts/UserContext'
import useField from '../../hooks/useField'

export default function LoginForm () {
  const { login, loginError } = useContext(UserContext)

  const username = useField()
  const password = useField()

  function handleSubmit (event) {
    event.preventDefault()

    login({ username: username.value, password: password.value })
  }

  return (
    <div>
      {loginError && <div className='error'>{loginError}</div>}

      <form onSubmit={handleSubmit}>
        <div className='form-item'>
          <input placeholder='username' {...username} />
        </div>
        <div className='form-item'>
          <input placeholder='password' {...password} />
        </div>
        <div className='form-item'>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  )
}
