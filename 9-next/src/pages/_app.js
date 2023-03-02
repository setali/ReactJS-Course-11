import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import NextNProgress from 'nextjs-progressbar'
// import random from 'lodash/random'
import '../styles/general.css'

// const random = (min, max) => Math.floor(Math.random() * (max - min) + min)

export default function MyApp ({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const loadingOn = () => setLoading(true)
  const loadingOff = () => setLoading(false)

  useEffect(() => {
    router.events.on('routeChangeStart', loadingOn)
    router.events.on('routeChangeComplete', loadingOff)

    return () => {
      router.events.off('routeChangeStart', loadingOn)
      router.events.off('routeChangeComplete', loadingOff)
    }
  }, [])

  return (
    <div>
      {/* {random(1, 100)} */}
      {loading && 'Loading ....'}
      <NextNProgress />
      <Component {...pageProps} />
    </div>
  )
}
