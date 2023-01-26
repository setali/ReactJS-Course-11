import React from 'react'

const ThemeContext = React.createContext()

export const themes = {
  dark: { color: '#fff', backgroundColor: '#222' },
  light: { color: '#000', backgroundColor: '#eee' }
}

export default ThemeContext
