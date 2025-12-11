import Blog from './Blog'
import Loading from './Loading'

import useBlogs from '../hooks/useBlogs'

const BlogList = ({ currentUser }) => {
  const { blogs } = useBlogs()

  if (blogs.length === 0) return <Loading />

  return (
    <div>
      {blogs
        .slice()
        .sort((a, b) => b.likes - a.likes)
        .map((blog) => (
          <Blog key={blog.id} blog={blog} currentUser={currentUser} />
        ))}
    </div>
  )
}

export default BlogList
