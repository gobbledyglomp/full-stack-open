import { useNavigate } from 'react-router-dom'

import Loading from './Loading'

import useBlogs from '../hooks/useBlogs'
import useNotification from '../hooks/useNotification'
import useLogin from '../hooks/useLogin'

const Blog = ({ id }) => {
  const { blogs, likeBlog, deleteBlog } = useBlogs()
  const { notify } = useNotification()
  const { user } = useLogin()

  const navigate = useNavigate()

  if (blogs === null) {
    return <Loading />
  }

  const blog = blogs.find((blog) => blog.id === id)

  if (!blog) {
    return <div>Blog not found</div>
  }

  // Handlers
  const handleLike = async (event) => {
    event.preventDefault()
    try {
      await likeBlog(blog)
    } catch (error) {
      notify('ERROR', error)
    }
  }

  const handleDeletion = async (event) => {
    event.preventDefault()
    try {
      const canDelete = confirm(`Remove blog ${blog.title} by ${blog.author}`)
      if (canDelete) {
        await deleteBlog(blog)
      }
      notify('INFO', `Blog "${blog.title}" deleted`)
      navigate('/')
    } catch (error) {
      notify('ERROR', error.message)
    }
  }

  // Styles
  const deleteButtonStyle = {
    marginTop: '10px',
    display: blog.user.username === user.username ? '' : 'none',
  }

  // Render
  return (
    <div>
      {/* Title */}
      <h2>
        <i>{blog.title}</i> by {blog.author}
      </h2>
      {/* URL */}
      <div>
        <a href={blog.url}>{blog.url}</a>
      </div>
      {/* Likes */}
      <div>
        Likes: {blog.likes}
        <button onClick={handleLike}>❤️</button>
      </div>
      {/* User */}
      <div>Added by {blog.user.name}</div>
      {/* Delete Button */}
      <div style={deleteButtonStyle}>
        <button onClick={handleDeletion}>Delete</button>
      </div>
    </div>
  )
}

export default Blog
