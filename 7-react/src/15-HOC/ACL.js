import React from 'react'

const user = {
  name: 'Ali',
  family: 'Mousavi',
  permissions: ['ADD_TASK', 'EDIT_TASK', 'DELETE_TASK', 'VIEW_TASK_LIST'],
  roles: ['ADMIN', 'OPERATOR'],
  role: 'ADMIN'
}

export function checkPermission (permission) {
  return user.permissions.includes(permission)
}

export default function ACL (Component) {
  return class MyACL extends React.Component {
    render () {
      return (
        checkPermission(this.props.permission) && <Component {...this.props} />
      )
    }
  }
}
