import { ListGroup } from 'react-bootstrap'

import Loading from './Loading'
import Togglable from './Togglable'
import CreateBlogs from './CreateBlogs'
import BlogItem from './BlogItem'

import useBlogs from '../hooks/useBlogs'

const BlogList = () => {
  const { blogs } = useBlogs()

  if (blogs === null) return <Loading />

  return (
    <div>
      <Togglable label="Create New Blog">
        <CreateBlogs />
      </Togglable>
      <ListGroup as="ol">
        {blogs
          .slice()
          .sort((a, b) => b.likes - a.likes)
          .map((blog) => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
      </ListGroup>
    </div>
  )
}

export default BlogList
