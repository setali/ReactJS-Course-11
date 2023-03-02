// import axios from 'axios'
import Link from 'next/link'
import Main from 'layouts/Main'

export default function Users ({ users }) {
  return (
    <Main>
      <h2>Users list</h2>
      <ol>
        {users.map(user => (
          <li key={user.id}>
            <Link href={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ol>
    </Main>
  )
}

export async function getServerSideProps () {
  const url = 'https://jsonplaceholder.typicode.com/users'

  // const { data: users } = await axios(url)

  const response = await fetch(url)
  const users = await response.json()

  // throw new Error('Fake error')

  return {
    props: {
      users
    }
  }
}
