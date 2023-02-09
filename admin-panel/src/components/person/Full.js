import { Divider } from 'antd'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import request from '../../tools/request'

export default function Full () {
  const [person, setPerson] = useState({})

  const { id } = useParams()

  useEffect(() => {
    request(`/users/${id}`).then(({ data }) => setPerson(data))
  }, [id])

  return (
    <div>
      <h3>نمایش کاربر</h3>
      <Divider />
      <label>نام:</label>
      <Divider type='vertical' />
      {person.name}
      <Divider />
      <label>ایمیل:</label>
      <Divider type='vertical' />
      {person.email}
      <Divider />
      <Link to='/person'> بازگشت به لیست کاربران</Link>
    </div>
  )
}
