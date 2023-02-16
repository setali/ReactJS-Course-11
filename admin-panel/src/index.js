import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { ConfigProvider } from 'antd'
import fa_IR from 'antd/lib/locale/fa_IR'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <Router>
    <ConfigProvider
      direction='rtl'
      locale={fa_IR}
      theme={{ token: { fontFamily: 'vazir' } }}
    >
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </ConfigProvider>
  </Router>
  // </React.StrictMode>
)
