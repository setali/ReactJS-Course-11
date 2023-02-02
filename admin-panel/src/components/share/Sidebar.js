import {
    DashboardOutlined, SettingOutlined, UserOutlined
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'

const { Sider } = Layout

function getItem (label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type
  }
}
const items = [
  getItem('داشبورد', 'dashboard', <DashboardOutlined />),
  getItem('مدیریت کاربران', 'users', <UserOutlined />, [
    getItem('لیست کاربران', 'users-list'),
    getItem('افزودن کاربر', 'users-add')
  ]),
  getItem('مدیریت مقالات', 'posts', <UserOutlined />, [
    getItem('لیست مقالات', 'posts-list'),
    getItem('افزودن مقاله', 'posts-add')
  ]),
  {
    type: 'divider'
  },
  getItem('تنظیمات', 'settings', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12')
  ])
]

export default function Sidebar () {
  return (
    <Sider>
      <Menu
        theme='dark'
        style={{ width: 200 }}
        defaultSelectedKeys={['dashboard']}
        defaultOpenKeys={['users', 'posts']}
        mode='inline'
        items={items}
      />
    </Sider>
  )
}
