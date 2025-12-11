import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import CreateBlogs from './CreateBlogs'
import Notification from './Notification'
import Togglable from './Togglable'
import BlogList from './BlogList'
import UserInfo from './UserInfo'
import Users from './Users'

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

      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<BlogList />} />
      </Routes>
    </>
  )
}

export default Blogs
