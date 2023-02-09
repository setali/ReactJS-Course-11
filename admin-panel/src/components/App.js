import { Layout } from 'antd'
import Footer from './share/Footer'
import Header from './share/Header'
import Sidebar from './share/Sidebar'
import { Routes, Route } from 'react-router-dom'
import '../assets/css/general.css'
import PersonRouter from './person/Router'
import Dashboard from './general/Dashboard'

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
            </Routes>
          </Content>
        </Layout>
        <Footer />
      </Layout>
    </div>
  )
}

export default App
