import { useSelector, useDispatch } from 'react-redux'
import {
  getBlogs as getBlogsAction,
  addBlog as addBlogAction,
} from '../reducers/blogsReducer'

const useBlogs = () => {
  const blogs = useSelector(({ blogs }) => blogs.entities)

  const dispatch = useDispatch()

  const getBlogs = () => dispatch(getBlogsAction())
  const addBlog = (blog) => dispatch(addBlogAction(blog))

  return {
    blogs,
    getBlogs,
    addBlog,
  }
}

export default useBlogs
