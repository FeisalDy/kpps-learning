'use client'
import { Editor } from 'novel'
import { useState } from 'react'
import { Input, Button, ButtonGroup } from '@nextui-org/react'

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
      <div className='grid py-4 mx-auto gap-y-6'>
        <Input
          type='text'
          variant='underlined'
          label='Title'
          placeholder='Enter the title of your article'
          value={title}
          onValueChange={setTitle}
        />
        <Editor defaultValue={editorContent} className='shadow-lg' />
        <Button color='success' onClick={handleSubmit}>
          Save to Database
        </Button>
      </div>
    </>
  )
}
