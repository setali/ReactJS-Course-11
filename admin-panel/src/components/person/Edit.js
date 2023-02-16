import { message } from 'antd'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GENDER_OPTIONS } from '../../tools/constants'
import request from '../../tools/request'
import { Checkbox, Form, Select, Submit, Text } from '../utils/Form'
import Spinner from '../utils/Spinner'

export default function Edit () {
  const [person, setPerson] = useState({})

  const { id } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    request(`/users/${id}`).then(({ data }) => setPerson(data))
  }, [id])

  function handelSubmit (values) {
    request(`/users/${id}`, { method: 'PUT', data: values })
      .then(response => {
        message.success('کاربر با موفقیت بروزرسانی شد')
        navigate('/person')
      })
      .catch(err => message.error('متاسفانه مشکلی پیش آمده است'))
  }

  if (!person.id) {
    return <Spinner />
  }

  return (
    <div>
      <Form onFinish={handelSubmit} initialValues={person}>
        <Text
          label='نام کاربری'
          name='username'
          required
          placeholder='نام کاربری'
          maxLength={5}
        />

        <Text label='نام' name='name' required placeholder='نام' />

        <Checkbox name='admin'>مدیر</Checkbox>

        <Select name='gender' label='جنسیت' required options={GENDER_OPTIONS} />

        <Submit />
      </Form>
    </div>
  )
}
