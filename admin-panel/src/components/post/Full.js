import { Divider } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { setPost } from '../../redux/actions/post'
import request from '../../tools/request'

export default function Full () {
  const post = useSelector(state => state.post)

  const dispatch = useDispatch()

  const { id } = useParams()

  useEffect(() => {
    request(`/posts/${id}`).then(({ data }) => dispatch(setPost(data)))
  }, [id, dispatch])

  return (
    <div>
      <h3>نمایش مقاله</h3>
      <Divider />
      <label>عنوان:</label>
      <Divider type='vertical' />
      {post.title}
      <Divider />
      <label>متن:</label>
      <Divider type='vertical' />
      {post.body}
      <Divider />
      <Link to='/post'> بازگشت به لیست مقالات</Link>
    </div>
  )
}
