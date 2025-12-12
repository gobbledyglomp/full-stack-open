import { useEffect } from 'react'
import { Routes, Route, useMatch } from 'react-router-dom'

import CreateBlogs from './CreateBlogs'
import Notification from './Notification'
import Togglable from './Togglable'
import BlogList from './BlogList'
import UserInfo from './UserInfo'
import Users from './Users'
import User from './User'

import useBlogs from '../hooks/useBlogs'

const Blogs = () => {
  const { getBlogs } = useBlogs()

  useEffect(() => {
    getBlogs()
  }, [])

  const userMatch = useMatch('/users/:id')
  const idMatched = userMatch ? userMatch.params.id : null

  return (
    <>
      <h1>Blogs</h1>
      <Notification />
      <UserInfo />
      <Togglable label="Create New Blog">
        <CreateBlogs />
      </Togglable>

      <Routes>
        <Route path="/users/:id" element={<User id={idMatched} />} />
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<BlogList />} />
      </Routes>
    </>
  )
}

export default Blogs
