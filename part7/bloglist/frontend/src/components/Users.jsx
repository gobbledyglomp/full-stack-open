import { useState, useEffect } from 'react'

import Loading from './Loading'
import userService from '../services/users'

const Table = ({ users }) => (
  <table>
    <tbody>
      <tr>
        <td></td>
        <td style={{ fontWeight: 'bold' }}>blogs created</td>
      </tr>
      {users.map((user) => (
        <tr key={user.id}>
          <td>
            <label>{user.name}</label>
          </td>
          <td>{user.blogs.length}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

const Users = () => {
  const [users, setUsers] = useState(null)

  useEffect(() => {
    userService.getUsers().then((users) => setUsers(users))
  }, [])

  return (
    <div>
      <h2>Users</h2>
      {users === null ? <Loading /> : <Table users={users} />}
    </div>
  )
}

export default Users
