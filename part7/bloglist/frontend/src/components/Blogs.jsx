import { useEffect } from 'react'
import { Routes, Route, useMatch } from 'react-router-dom'

import Notification from './Notification'
import BlogList from './BlogList'
import UserInfo from './UserInfo'
import Users from './Users'
import User from './User'
import Blog from './Blog'

import useBlogs from '../hooks/useBlogs'

const Blogs = () => {
  const { getBlogs } = useBlogs()

  useEffect(() => {
    getBlogs()
  }, [])

  const userMatch = useMatch('/users/:id')
  const userIdMatched = userMatch ? userMatch.params.id : null

  const blogMatch = useMatch('/blogs/:id')
  const blogIdMatched = blogMatch ? blogMatch.params.id : null

  return (
    <>
      <h1>Blogs</h1>
      <Notification />
      <UserInfo />

      <Routes>
        <Route path="/blogs/:id" element={<Blog id={blogIdMatched} />} />
        <Route path="/users/:id" element={<User id={userIdMatched} />} />
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<BlogList />} />
      </Routes>
    </>
  )
}

export default Blogs
