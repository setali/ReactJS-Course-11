import React from 'react'

const Heavy = React.lazy(() => import('./Heavy'))

export default function Main () {
  return (
    <div>
      Main
      <React.Suspense fallback='Loading ....'>
        <Heavy />
      </React.Suspense>
    </div>
  )
}
