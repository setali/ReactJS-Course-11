import Main from 'layouts/Main'
import Head from 'next/head'

export default function Home () {
  return (
    <Main>
      <Head>
        <title>Anisa | NesxtJS Course</title>
      </Head>
      <h2>Home Page</h2>
      <h3>Welcome {process.env.myName}</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
        voluptates ab praesentium consequatur reiciendis repellat minus esse non
        in. Maiores, quae laboriosam. Qui sapiente eveniet ipsum dolorum nemo
        dolores distinctio.
      </p>
    </Main>
  )
}
