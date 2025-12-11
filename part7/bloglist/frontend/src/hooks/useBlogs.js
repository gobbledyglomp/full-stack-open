import { useSelector, useDispatch } from 'react-redux'
import {
  getBlogs as getBlogsAction,
  addBlog as addBlogAction,
  likeBlog as likeBlogAction,
  deleteBlog as deleteBlogAction,
} from '../reducers/blogsReducer'

const useBlogs = () => {
  const blogs = useSelector(({ blogs }) => blogs.entities)

  const dispatch = useDispatch()

  const getBlogs = () => dispatch(getBlogsAction())
  const addBlog = (blog) => dispatch(addBlogAction(blog)).unwrap()
  const likeBlog = (blog) => dispatch(likeBlogAction(blog)).unwrap()
  const deleteBlog = (blog) => dispatch(deleteBlogAction(blog)).unwrap()

  return {
    blogs,
    getBlogs,
    addBlog,
    likeBlog,
    deleteBlog,
  }
}

export default useBlogs
