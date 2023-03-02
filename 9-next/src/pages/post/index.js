import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import Main from 'layouts/Main'

export default function Posts ({ posts }) {
  return (
    <Main>
      <Head>
        <title>NextJS | Posts list</title>
      </Head>
      <h2>Posts list</h2>
      <ol>
        {posts.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/post/${id}`}>{title}</Link>
          </li>
        ))}
      </ol>
    </Main>
  )
}

export async function getStaticProps () {
  const url = 'https://jsonplaceholder.typicode.com/posts'

  const { data: posts } = await axios(url)

  console.log('Posts count', posts.length)

  return {
    props: {
      posts
    },
    revalidate: 10
  }
}
