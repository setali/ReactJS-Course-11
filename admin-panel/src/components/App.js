import { Layout } from 'antd'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './general/Dashboard'
import PersonRouter from './person/Router'
import PostRouter from './post/Router'
import Footer from './share/Footer'
import Header from './share/Header'
import Sidebar from './share/Sidebar'

import '../assets/css/general.css'

const { Content } = Layout

function App () {
  return (
    <div className='app'>
      <Layout>
        <Header />
        <Layout>
          <Sidebar />
          <Content className='content'>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/person/*' element={<PersonRouter />} />
              <Route path='/post/*' element={<PostRouter />} />
            </Routes>
          </Content>
        </Layout>
        <Footer />
      </Layout>
    </div>
  )
}

export default App
