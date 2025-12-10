import Blog from './Blog'
import Loading from './Loading'

import useBlogs from '../hooks/useBlogs'

const BlogList = ({ currentUser }) => {
  const { blogs } = useBlogs()

  const updateBlog = (updatedBlog) => {
    const updatedBlogs = blogs.map((blog) => {
      if (blog.id === updatedBlog.id) {
        return updatedBlog
      }
      return blog
    })
    // setBlogs(updatedBlogs)
  }

  const deleteBlog = (deletedBlog) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== deletedBlog.id)
    // setBlogs(updatedBlogs)
  }

  // Render
  if (blogs.length === 0) return <Loading />

  return (
    <div>
      {blogs
        .slice()
        .sort((a, b) => b.likes - a.likes)
        .map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            updateBlog={updateBlog}
            deleteBlog={deleteBlog}
            currentUser={currentUser}
          />
        ))}
    </div>
  )
}

export default BlogList
