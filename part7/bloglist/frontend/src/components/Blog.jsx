import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Loading from './Loading'

import useBlogs from '../hooks/useBlogs'
import useNotification from '../hooks/useNotification'
import useLogin from '../hooks/useLogin'

const Comments = ({ blog }) => {
  const [comment, setComment] = useState('')
  const { commentBlog } = useBlogs()
  const { notify } = useNotification()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await commentBlog(blog, comment)
      setComment('')
    } catch (error) {
      notify('ERROR', error)
    }
  }

  return (
    <div>
      <h3>Comments</h3>
      {/* Send comment form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={comment}
          onChange={({ target }) => setComment(target.value)}
        />
        <button type="submit">Send</button>
      </form>
      {/* Comment list */}
      {blog.comments.length === 0 ? (
        <p>There is no comments</p>
      ) : (
        <ul>
          {blog.comments.map((comment) => (
            <li key={comment.id}>{comment.content}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

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
        notify('INFO', `Blog "${blog.title}" deleted`)
        navigate('/')
      }
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
      {/* Comments */}
      <Comments blog={blog} />
    </div>
  )
}

export default Blog
