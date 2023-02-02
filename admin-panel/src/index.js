import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { ConfigProvider } from 'antd'
import fa_IR from 'antd/lib/locale/fa_IR'
import { BrowserRouter as Router } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <Router>
    <ConfigProvider
      direction='rtl'
      locale={fa_IR}
      theme={{ token: { fontFamily: 'vazir' } }}
    >
      <App />
    </ConfigProvider>
  </Router>
  // </React.StrictMode>
)
