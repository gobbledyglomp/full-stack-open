import { Link } from 'react-router-dom'
import Loading from './Loading'
import useLogin from '../hooks/useLogin'

const NavigationMenu = () => {
  const { user, logout } = useLogin()

  const listStyle = {
    display: 'flex',
    listStyleType: 'none',
    backgroundColor: '#dededeff',
    padding: 0,
    margin: 0,
  }

  const listItemStyle = {
    margin: '10px 20px',
  }

  return (
    <header>
      <nav>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <Link to="/">Blogs</Link>
          </li>
          <li style={listItemStyle}>
            <Link to="/users">Users</Link>
          </li>
          <li style={listItemStyle}>
            {user.username === null ? <Loading /> : <>{user.name} logged in.</>}
          </li>
          <li style={listItemStyle}>
            <button onClick={logout}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavigationMenu
