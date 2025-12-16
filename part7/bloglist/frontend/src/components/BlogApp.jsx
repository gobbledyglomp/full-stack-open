import { useEffect } from 'react'
import { Routes, Route, useMatch } from 'react-router-dom'

import Notification from './Notification'
import BlogList from './BlogList'
import NavigationMenu from './NavigationMenu'
import Users from './Users'
import User from './User'
import Blog from './Blog'

import useBlogs from '../hooks/useBlogs'

const BlogApp = () => {
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
      <NavigationMenu />
      <Notification />
      <h1>Blog app</h1>

      <Routes>
        <Route path="/blogs/:id" element={<Blog id={blogIdMatched} />} />
        <Route path="/users/:id" element={<User id={userIdMatched} />} />
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<BlogList />} />
      </Routes>
    </>
  )
}

export default BlogApp
