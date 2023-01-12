import React, { useEffect, useState } from 'react'
import Table from './Table'

const columns = [
  { title: 'ID', key: 'id', dataIndex: 'id' },
  { title: 'Name', key: 'name', dataIndex: 'name' },
  {
    title: 'Address - Phone',
    key: 'address',
    dataIndex: 'address',
    render: (field, record) => {
      return `${field.city} - ${field.street} - ${record.phone}`
    }
  }
]

export default function App () {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.ir/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <Table columns={columns} data={users} />
    </div>
  )
}
