import React, { useContext, useEffect, useState } from 'react'
import request from '../../tools/request'
import ThemeContext from '../../contexts/ThemeContext'
import { Link } from 'react-router-dom'

export default function Articles () {
  const theme = useContext(ThemeContext)
  const [articles, setArticles] = useState([])

  useEffect(() => {
    request('/api/admin/article').then(response => {
      setArticles(response.data.items)
    })
  }, [])

  return (
    <div className='box' style={theme}>
      <h2>Articles</h2>
      <ol>
        {articles.map(({ id, title }) => (
          <li key={id}><Link to={`/article/${id}`}>{title}</Link></li>
        ))}
      </ol>
    </div>
  )
}
