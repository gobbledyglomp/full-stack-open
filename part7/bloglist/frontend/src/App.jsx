import { useEffect } from 'react'

import Blogs from './components/Blogs'
import Login from './components/Login'
import Loading from './components/Loading'

import useLogin from './hooks/useLogin'

const App = () => {
  const { user, loadFromStorage } = useLogin()

  useEffect(() => {
    loadFromStorage()
  }, [])

  // Render
  if (user === null) {
    return <Loading />
  }

  if (user.username === null) {
    return <Login />
  }

  return <Blogs />
}

export default App
