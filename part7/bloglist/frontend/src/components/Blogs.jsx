import { useEffect } from 'react'

import CreateBlogs from './CreateBlogs'
import Notification from './Notification'
import Togglable from './Togglable'
import BlogList from './BlogList'
import UserInfo from './UserInfo'

import useBlogs from '../hooks/useBlogs'

const Blogs = () => {
  const { getBlogs } = useBlogs()

  useEffect(() => {
    getBlogs()
  }, [])

  return (
    <>
      <h1>Blogs</h1>
      <Notification />
      <UserInfo />
      <Togglable label="Create New Blog">
        <CreateBlogs />
      </Togglable>
      <BlogList />
    </>
  )
}

export default Blogs
