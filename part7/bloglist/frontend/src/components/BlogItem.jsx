import { Link } from 'react-router-dom'

const BlogItem = ({ blog }) => {
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

  return (
    <div style={blogStyle}>
      <div style={titleStyle}>
        <div>
          <i>
            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
          </i>
          &nbsp;by {blog.author}
        </div>
      </div>
    </div>
  )
}

export default BlogItem
