import AuthProvider from './AuthProvider'
import ThemeProvider from './ThemeProvider'

export default function Providers ({ children }) {
  return (
    <AuthProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </AuthProvider>
  )
}
