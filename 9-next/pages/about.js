import Main from '../layouts/Main'

export default function About () {
  return (
    <Main>
      <h2 className='my-header'>About Page</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. repellat minus
        esse non in. Maiores, quae laboriosam. Qui sapiente repellat minus esse
        non in. Maiores, quae laboriosam. Qui sapiente repellat minus esse non
        in. Maiores, quae laboriosam. Qui sapiente eveniet ipsum dolorum nemo
        dolores distinctio.
      </p>
      <style jsx>{`
        h2 {
          color: red;
        }
        p {
          color: aqua;
          padding: 10px;
        }
      `}</style>
    </Main>
  )
}
