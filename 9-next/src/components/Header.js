import Image from 'next/image'
import logo from '../../public/images/logo.png'

export default function Header () {
  return (
    <header>
      {/* <img src='/images/logo.png' /> */}
      <Image src={logo} alt='logo' width={100} />
      <h2>My Header</h2>
      <style jsx>{`
        img {
          width: 100px;
        }
        header {
          display: flex;
        }
        h2 {
          margin: 1rem;
        }
      `}</style>
    </header>
  )
}
