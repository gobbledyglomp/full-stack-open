import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Loading from './Loading'
import useUsers from '../hooks/useUsers'

const Table = ({ users }) => (
  <table>
    <tbody>
      <tr>
        <td></td>
        <td style={{ fontWeight: 'bold' }}>blogs created</td>
      </tr>
      {users &&
        users.map((user) => (
          <tr key={user.id}>
            <td>
              <label>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </label>
            </td>
            <td>{user.blogs.length}</td>
          </tr>
        ))}
    </tbody>
  </table>
)

const Users = () => {
  const { users, getUsers } = useUsers()

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>
      <h2>Users</h2>
      {users === null ? <Loading /> : <Table users={users} />}
    </div>
  )
}

export default Users
