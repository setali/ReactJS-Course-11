import ReactDOM from 'react-dom/client'
import { act } from 'react-dom/test-utils'
import Post from '../Post'

let container = null
let root
beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
  root = ReactDOM.createRoot(container)
})

afterEach(() => {
  act(() => {
    root.unmount(container)
  })

  container.remove()
  container = null
})

describe('post test', () => {
  test('fetch data', async () => {
    const fakePost = {
      id: 1,
      title: 'Post title',
      body: 'Post body'
    }

    jest.spyOn(global, 'fetch').mockImplementation(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve(fakePost)
        }
      })
    })

    await act(() => {
      root.render(<Post />)
    })

    expect(container.querySelector('h1').textContent).toBe('Post item')
    expect(container.querySelector('p').textContent).toBe(fakePost.title)

    global.fetch.mockRestore()
  })
})
