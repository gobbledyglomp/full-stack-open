import { useState } from 'react'

import useNotification from '../hooks/useNotification'
import useBlogs from '../hooks/useBlogs'

const CreateBlogs = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const { notify } = useNotification()
  const { addBlog } = useBlogs()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await addBlog({ title, author, url })
      notify('INFO', `New blog "${title}" by ${author} added`)
      setTitle('')
      setAuthor('')
      setUrl('')
    } catch (error) {
      notify('ERROR', error)
    }
  }

  return (
    <div>
      <h2>Create new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={({ target }) => setTitle(target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Author:
            <input
              type="text"
              value={author}
              onChange={({ target }) => setAuthor(target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            URL:
            <input
              type="text"
              value={url}
              onChange={({ target }) => setUrl(target.value)}
            />
          </label>
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  )
}

export default CreateBlogs
