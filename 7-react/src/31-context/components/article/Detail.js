import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ThemeContext from '../../contexts/ThemeContext'
import request from '../../tools/request'
import Loading from '../general/Loading'

export default function Article () {
  const theme = useContext(ThemeContext)
  const [article, setArticle] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    request(`/api/admin/article/${id}`)
      .then(({ data }) => {
        setArticle(data)
      })
      .finally(() => setIsLoading(false))
  }, [id])

  return isLoading ? (
    <Loading />
  ) : (
    <div className='box' style={theme}>
      <h2>{article.title}</h2>
      <div className='article-image'>
        <img src={`/${article.image}`} />
      </div>
      <p>{article.text}</p>
    </div>
  )
}
