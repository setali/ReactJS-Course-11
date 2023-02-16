import { message } from 'antd'
import request from '../../tools/request'

export function setPersons (payload) {
  return { type: 'PERSONS', payload }
}

export function setPerson (payload) {
  return { type: 'PERSON', payload }
}

export function removePerson (payload) {
  return { type: 'REMOVE_PERSON', payload }
}

export function getPersons () {
  return (dispatch, getState) => {
    if (getState().persons.length === 0) {
      request('/users').then(({ data }) => dispatch(setPersons(data)))
    }
  }
}

export function getPerson (id) {
  return dispatch => {
    request(`/users/${id}`).then(({ data }) => dispatch(setPerson(data)))
  }
}

export function deletePerson (id) {
  return dispatch => {
    request(`/users/${id}`, { method: 'delete' }).then(response => {
      message.success('کاربر با موفقیت حذف شد')
      dispatch(removePerson(id))
    })
  }
}
