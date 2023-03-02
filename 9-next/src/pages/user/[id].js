import Main from 'layouts/Main'
import axios from 'axios'

export default function User ({ user }) {
  return (
    <Main>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </Main>
  )
}

export async function getServerSideProps ({ params: { id } }) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`

  const { data: user } = await axios(url)

  return {
    props: { user }
  }
}
