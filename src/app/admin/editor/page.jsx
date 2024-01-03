'use client'
import { Editor } from 'novel'
import { useState } from 'react'
import { Input } from '@nextui-org/react'

export default function App () {
  const [editorContent, setEditorContent] = useState(
    localStorage.getItem('novel__content') || ''
  )
  const [title, setTitle] = useState('')
  const [error, setError] = useState([])

  const handleSubmit = async () => {
    try {
      const res = await fetch('/api/article/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          editorContent: editorContent,
          title: title
        })
      })
      if (res.status === 400) {
        setError('This email is already registered')
      }
      if (res.status === 200) {
        setError('')
        router.push('/admin/editor')
      }
    } catch (error) {
      setError('Error, try again')
      console.log(error)
    }
  }

  return (
    <>
      <div className='mx-auto'>
        <Input
          type='text'
          variant='underlined'
          label='Title'
          placeholder='Enter the title of your article'
          value={title}
          onValueChange={setTitle}
        />
        <Editor defaultValue={editorContent} />
        <button onClick={handleSubmit}>Save to Database</button>
      </div>
    </>
  )
}
