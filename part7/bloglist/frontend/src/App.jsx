import { useEffect } from 'react'

import BlogApp from './components/BlogApp'
import Login from './components/Login'
import Loading from './components/Loading'

import useLogin from './hooks/useLogin'
import Footer from './components/Footer'
import NavigationMenu from './components/NavigationMenu'
import Notification from './components/Notification'

const App = () => {
  const { user, loadFromStorage } = useLogin()

  useEffect(() => {
    loadFromStorage()
  }, [])

  // Render
  if (user === null) {
    return <Loading />
  }

  return (
    <div className="container flex-column d-flex min-vh-100">
      <NavigationMenu />
      <Notification />
      <div className="flex-grow-1">
        {user.username === null ? <Login /> : <BlogApp />}
      </div>
      <Footer />
    </div>
  )
}

export default App
