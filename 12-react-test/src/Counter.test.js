import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import userEvent from '@testing-library/user-event'
import Counter from './Counter'

describe('Counter tests', () => {
  test('Render test', () => {
    render(<Counter />)

    screen.getByText(/my counter/i)
    screen.getByText(/increment/i)

    const value = screen.getByTestId('counter-value').textContent

    expect(value).toBe('0')
  })

  test('Action test', async () => {
    render(<Counter />)

    const button = screen.getByText(/increment/i)

    const value = screen.getByTestId('counter-value')

    expect(value.textContent).toBe('0')

    await act(() => {
      userEvent.click(button)
      userEvent.click(button)
      userEvent.click(button)
      userEvent.click(button)
    })

    expect(value.textContent).toBe('4')
  })
})
