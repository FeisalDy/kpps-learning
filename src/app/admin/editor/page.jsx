'use client'
import { Editor } from 'novel'
import { useState } from 'react'

export default function App () {
  const [editorContent, setEditorContent] = useState(
    localStorage.getItem('novel__content') || ''
  )
  console.log(editorContent)

  const handleUpdate = editor => {
    // Update local storage with the current editor content
    const content = editor.getJSON() // Assuming this method gets the content in JSON format
    localStorage.setItem('novel__content', JSON.stringify(content))

    // Send content to the backend
    saveContentToBackend(content)
  }

  const saveContentToBackend = content => {
    // Here, you should implement your logic to send the content to your backend API
    // You can use fetch, axios, or any other HTTP library to make a POST request to your backend endpoint
    fetch('your-backend-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // Add any necessary authorization headers or other headers
      },
      body: JSON.stringify({ content })
    })
      .then(response => {
        // Handle the response from the backend if needed
        console.log('Content saved to backend:', response)
      })
      .catch(error => {
        // Handle any errors that occur during the request
        console.error('Error saving content to backend:', error)
      })
  }

  return <Editor onUpdate={handleUpdate} defaultValue={editorContent} />
}
