import { useEffect, useState } from 'react'

export default function Post () {
  const [post, setPost] = useState({})

  useEffect(() => {
    fetch('https://jsonplaceholder.ir/posts/1')
      .then(response => response.json())
      .then(data => setPost(data))
  }, [])

  return (
    <div>
      <h1>Post item</h1>
      <p>{post.title}</p>
    </div>
  )
}
