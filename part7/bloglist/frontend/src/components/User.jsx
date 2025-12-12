import { useEffect } from 'react'
import Loading from './Loading'
import useUsers from '../hooks/useUsers'

const User = ({ id }) => {
  const { users, getUsers } = useUsers()

  useEffect(() => {
    getUsers()
  }, [])

  if (users === null) {
    return <Loading />
  }

  const user = users.find((user) => user.id === id)

  return (
    <div>
      <h2>{user.name}</h2>
      <h3>added blogs:</h3>
      <ul>
        {user.blogs.map((blog) => (
          <li key={blog.id}>
            <i>{blog.title}</i> by {blog.author}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default User
