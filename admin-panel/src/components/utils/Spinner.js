import { Space, Spin } from 'antd'
import React from 'react'

export default function Spinner () {
  return (
    <div>
      <Space>
        <Spin size='large' />
      </Space>
    </div>
  )
}
