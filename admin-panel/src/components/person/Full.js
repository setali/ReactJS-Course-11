import { Divider } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getPerson } from '../../redux/actions/person'

const sorts = [
  { label: 'پربازدیدترین', value: 'MOST_VIEW' },
  { label: 'ارزان ترین', value: 'LOW_COST' },
  { label: 'گران ترین', value: 'MOST_COST' }
]

export default function Full () {
  const [sort, setSort] = useState('MOST_VIEW')

  const { id } = useParams()

  const person = useSelector(state => state.person)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPerson(id))
  }, [id, sort, dispatch])

  return (
    <div>
      <ul>
        {sorts.map(el => (
          <li
            key={el.value}
            className={el.value === sort ? 'active' : ''}
            onClick={() => setSort(el.value)}
          >
            {el.label}
          </li>
        ))}
      </ul>

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
