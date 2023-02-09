import React, { Component } from 'react'
import request from '../../tools/request'
import { Popconfirm, message } from 'antd'
import { Link } from 'react-router-dom'
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import Table from '../utils/Table'

export default class Persons extends Component {
  state = { persons: [] }

  columns = [
    { key: 'id', title: 'شناسه' },
    { key: 'name', title: 'نام' },
    { key: 'username', title: 'نام کاربری' },
    { key: 'email', title: 'ایمیل' },
    {
      key: 'address',
      title: 'آدرس',
      render: (field, record) =>
        `${field.city} - ${field.street} - ${record.phone}`
    },
    {
      key: 'actions',
      title: 'عملیات',
      render: (_, record) => (
        <>
          <Link to={`/person/${record.id}`}>
            <EyeOutlined />
          </Link>
          <Popconfirm
            title='آیا از حذف این رکورد مطمین هستید؟'
            onConfirm={() => this.removeItem(record.id)}
          >
            <DeleteOutlined
              style={{ margin: '10px', color: 'red', cursor: 'pointer' }}
            />
          </Popconfirm>
          <Link to={`/person/${record.id}/edit`}>
            <EditOutlined />
          </Link>
        </>
      )
    }
  ]

  getData () {
    request('/users').then(({ data: persons }) => this.setState({ persons }))
  }

  componentDidMount () {
    this.getData()
  }

  removeItem (id) {
    request(`/users/${id}`, { method: 'delete' }).then(response => {
      message.success('کاربر با موفقیت حذف شد')
      this.getData()
    })
  }

  render () {
    return (
      <div>
        <Table data={this.state.persons} columns={this.columns} />
      </div>
    )
  }
}
