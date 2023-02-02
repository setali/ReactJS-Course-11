import { Route, Routes } from 'react-router-dom'
import Article from './components/article/Detail'
import Articles from './components/article/List'
import Login from './components/auth/Login'
import Page404 from './components/general/404'
import About from './components/general/About'
import Contact from './components/general/Contact'
import Home from './components/general/Home'
import Footer from './components/share/Footer'
import Header from './components/share/Header'
import Sidebar from './components/share/Sidebar'
import Providers from './providers'

import './assets/styles/style.css'
import Dashboard from './components/general/Dashboard'
import Profile from './components/general/Profile'
import RequireAuth from './components/utils/RequireAuth'

export default function App () {
  return (
    <div>
      <Providers>
        <Header />
        <section className='main'>
          <Sidebar />
          <div className='content'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/article' element={<Articles />} />
              <Route path='/article/:id' element={<Article />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/login' element={<Login />} />
              <Route
                path='/dashboard'
                element={<RequireAuth component={<Dashboard />} />}
              />
              <Route
                path='/profile'
                element={
                  <RequireAuth>
                    <Profile />
                  </RequireAuth>
                }
              />
              <Route path='*' element={<Page404 />} />
            </Routes>
          </div>
        </section>
        <Footer />
      </Providers>
    </div>
  )
}
