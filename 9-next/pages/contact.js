import Main from '../layouts/Main'
import styles from '../styles/contact.module.css'

console.log(styles)

export default function Contact () {
  return (
    <Main>
      <h2 className={styles.header}>Contact Page</h2>
      <p className={styles.paragraph}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. repellat minus
        esse non in. Maiores, quae laboriosam. Qui sapiente repellat ipsum
        dolorum nemo dolores distinctio. ipsum dolorum nemo dolores distinctio.
        ipsum dolorum nemo dolores distinctio.
      </p>
    </Main>
  )
}
