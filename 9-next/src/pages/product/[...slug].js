import Main from 'layouts/Main'

export default function Product ({ params }) {
  return (
    <Main>
      <div>
        Catch all routes =={'>'} {params.slug.join(' / ')}
      </div>
    </Main>
  )
}

export async function getServerSideProps ({ params }) {
  return {
    props: { params }
  }
}
