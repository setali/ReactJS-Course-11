import Main from 'layouts/Main'

export default function Article ({ params }) {
  console.log(params)
  return (
    <Main>
      <div>
        Optional Catch all routes =={'>'} {params.slug?.join(' / ')}
      </div>
    </Main>
  )
}

export async function getServerSideProps ({ params }) {
  return {
    props: { params }
  }
}
