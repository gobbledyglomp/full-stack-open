import Loading from './Loading'
import useLogin from '../hooks/useLogin'

const UserInfo = () => {
  const { user, logout } = useLogin()

  if (user.username === null) return <Loading />

  return (
    <div style={{ marginBottom: '20px' }}>
      {user.name} logged in. &nbsp;
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default UserInfo
