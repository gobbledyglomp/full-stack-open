import Blog from './Blog'
import Loading from './Loading'

import useBlogs from '../hooks/useBlogs'

const BlogList = () => {
  const { blogs } = useBlogs()

  if (blogs === null) return <Loading />

  return (
    <div>
      {blogs
        .slice()
        .sort((a, b) => b.likes - a.likes)
        .map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
    </div>
  )
}

export default BlogList
