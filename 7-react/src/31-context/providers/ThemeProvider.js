import { useState } from 'react'
import ThemeContext, { themes } from '../contexts/ThemeContext'

export default function ThemeProvider ({ children }) {
  const [theme, setTheme] = useState(themes.light)

  return (
    <ThemeContext.Provider value={theme}>
      {theme === themes.dark ? (
        <button onClick={() => setTheme(themes.light)}>Light</button>
      ) : (
        <button onClick={() => setTheme(themes.dark)}>Dark</button>
      )}
      {children}
    </ThemeContext.Provider>
  )
}
