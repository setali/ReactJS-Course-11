import { Routes, Route } from 'react-router-dom'
import Edit from './Edit'
import Full from './Full'
import List from './List'
import New from './New'

export default function Router () {
  return (
    <Routes>
      <Route path='/' element={<List />} />
      <Route path='/new' element={<New />} />
      <Route path='/:id' element={<Full />} />
      <Route path='/:id/edit' element={<Edit />} />
    </Routes>
  )
}
