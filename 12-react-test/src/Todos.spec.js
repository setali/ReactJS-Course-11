import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'
import Todos from './Todos'

describe('Todos tests', () => {
  test('Add todo', () => {
    render(<Todos />)

    const firstTodo = 'First Todo'

    const input = screen.getByPlaceholderText('Task')
    const button = screen.getByText(/add todo/i)

    fireEvent.change(input, { target: { value: firstTodo } })
    fireEvent.click(button)

    screen.getByText(firstTodo)
  })

  test('Add todo by userEvent', async () => {
    render(<Todos />)

    const input = screen.getByPlaceholderText('Task')
    const button = screen.getByText(/add todo/i)
    const list = screen.getByTestId('todo-list')

    expect(list.childElementCount).toBe(0)

    const firstTodo = 'First Todo'

    await act(() => {
      userEvent.type(input, firstTodo)
      userEvent.click(button)
    })

    screen.getByText(firstTodo)

    expect(list.childElementCount).toBe(1)

    const secondTodo = 'SecondTodo'

    await act(() => {
      userEvent.type(input, secondTodo)
      userEvent.click(button)
    })

    screen.getByText(secondTodo)

    expect(list.childElementCount).toBe(2)

    await act(() => {
      userEvent.click(button)
      userEvent.click(button)
      userEvent.click(button)
      userEvent.click(button)
    })

    expect(list.childElementCount).toBe(2)
  })
})
