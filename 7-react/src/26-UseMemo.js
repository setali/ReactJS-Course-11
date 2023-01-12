import React, { useEffect, useState, useMemo } from 'react'

const data = [
  { id: 1, title: 'Yek', parentId: null },
  { id: 2, title: 'Do', parentId: 1 },
  { id: 3, title: 'Se', parentId: 1 },
  { id: 4, title: 'Chahr', parentId: 2 },
  { id: 5, title: 'Panj', parentId: 2 },
  { id: 6, title: 'Shesh', parentId: 3 }
]

const treeData = [
  {
    id: 1,
    title: 'Yek',
    children: [
      {
        id: 2,
        title: 'Do',
        children: [
          { id: 4, title: 'Chahr' },
          { id: 5, title: 'Panj' }
        ]
      },
      { id: 3, title: 'Se', children: [{ id: 6, title: 'Shesh' }] }
    ]
  }
]

export default function Parent () {
  const [mount, setMount] = useState(false)

  return (
    <div>
      <button onClick={() => setMount(m => !m)}>
        {mount ? 'UnMount' : 'Mount'}
      </button>
      {mount && <Child />}
    </div>
  )
}

function Child () {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setInterval(() => setCount(c => c + 1), 1000)
  }, [])

  function heavyProcess () {
    console.log('heavy')
    return (999999n ** 999999n).toString().length
  }

  const value = useMemo(() => {
    return heavyProcess()
  }, [])

  //   const value = heavyProcess()

  return (
    <div>
      Count: {count}
      <hr />
      Value: {value}
    </div>
  )
}
