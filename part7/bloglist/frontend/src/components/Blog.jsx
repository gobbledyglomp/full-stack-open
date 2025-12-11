import { useState } from 'react'

import useNotification from '../hooks/useNotification'
import useBlogs from '../hooks/useBlogs'
import useLogin from '../hooks/useLogin'

const Blog = ({ blog }) => {
  const [toggled, setToggled] = useState(false)

  const { notify } = useNotification()
  const { likeBlog, deleteBlog } = useBlogs()
  const { user } = useLogin()

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
    } catch (error) {
      notify('ERROR', error.message)
    }
  }

  // Styles
  const blogStyle = {
    padding: '10px',
    border: '2px solid #0288d1',
    backgroundColor: '#eaf8ff',
    borderWidth: 1,
    marginBottom: 5,
    maxWidth: '500px',
  }

  const titleStyle = {
    display: 'flex',
  }

  const buttonStyle = {
    marginLeft: 'auto',
  }

  const deleteButtonStyle = {
    marginTop: '10px',
    display: blog.user.username === user.username ? '' : 'none',
  }

  const descriptionStyle = {
    display: toggled ? '' : 'none',
    marginTop: '10px',
  }

  // Render
  return (
    <div style={blogStyle}>
      {/* Title */}
      <div style={titleStyle}>
        <div>
          <i>{blog.title}</i> &nbsp;by {blog.author}
        </div>
        {/* Button */}
        <div style={buttonStyle}>
          <button onClick={() => setToggled(!toggled)}>
            {toggled ? 'Hide' : 'View'}
          </button>
        </div>
      </div>
      {/* Description */}
      <div style={descriptionStyle}>
        <div>
          <a href={blog.url}>{blog.url}</a>
        </div>
        <div>
          Likes: {blog.likes}
          <button onClick={handleLike}>❤️</button>
        </div>
        <div>{blog.user.name}</div>
        {/* Button */}
        <div style={deleteButtonStyle}>
          <button onClick={handleDeletion}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Blog
