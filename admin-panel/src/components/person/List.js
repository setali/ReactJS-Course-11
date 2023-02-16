import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons'
import { Popconfirm } from 'antd'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletePerson, getPersons } from '../../redux/actions/person'
import Table from '../utils/Table'

class Persons extends Component {
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
            onConfirm={() => this.props.removeItem(record.id)}
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

  componentDidMount () {
    this.props.getItems()
  }

  render () {
    return (
      <div>
        <Table data={this.props.persons} columns={this.columns} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    persons: state.persons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getItems: () => dispatch(getPersons()),
    removeItem: id => dispatch(deletePerson(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons)
