import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import blogService from '../services/blogs'

export const getBlogs = createAsyncThunk('blogs/getBlogs', async () => {
  return await blogService.getAll()
})

export const addBlog = createAsyncThunk('blogs/addBlog', async (blog) => {
  return await blogService.create({
    title: blog.title,
    author: blog.author,
    url: blog.url,
  })
})

const blogsSlice = createSlice({
  name: 'blogs',
  initialState: {
    entities: [],
    loading: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.entities = action.payload
      })
      .addCase(addBlog.fulfilled, (state, action) => {
        state.entities = [...state.entities, action.payload]
      })
  },
})

export default blogsSlice.reducer
