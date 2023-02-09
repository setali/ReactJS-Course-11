import { message } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GENDER_OPTIONS } from '../../tools/constants'
import request from '../../tools/request'
import { Checkbox, Form, Select, Submit, Text } from '../utils/Form'

export default function New () {
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  function handelSubmit (values) {
    setLoading(true)
    request('/users', { method: 'POST', data: values })
      .then(response => {
        message.success('کاربر با موفقیت ساخته شد')
        navigate('/person')
      })
      .catch(err => message.error('متاسفانه مشکلی پیش آمده است'))
      .finally(() => setLoading(false))
  }

  return (
    <div>
      <Form onFinish={handelSubmit}>
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

        <Submit loading={loading} />
      </Form>
    </div>
  )
}
