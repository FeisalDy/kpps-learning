import { generateHTML } from '@tiptap/html'
import React, { useMemo } from 'react'
import { defaultExtensions } from '@/lib/default-extensions'

export default function NestedView ({ data }) {
  const json = data?.editorContent
  console.log(json)
  //   const output = generateHTML(json, defaultExtensions)

  return <div dangerouslySetInnerHTML={{ __html: json }}></div>
}
