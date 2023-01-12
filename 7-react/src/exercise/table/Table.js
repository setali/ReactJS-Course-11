import React from 'react'

export default function Table ({ columns, data, rowKey = 'id' }) {
  return (
    <div>
      <table border={1} width='100%'>
        <thead>
          <tr>
            {columns.map(column => (
              <th key={column.key}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(record => (
            <tr key={record[rowKey]}>
              {columns.map(column => (
                <td key={column.key}>
                  {column.render
                    ? column.render(record[column.dataIndex], record)
                    : record[column.dataIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
