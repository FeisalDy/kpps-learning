'use client'
import { useParams } from 'next/navigation'
import { useArticle } from '@/hooks/useArticle'
import React, { useMemo } from 'react'
import NestedView from '@/components/NestedView'
import { generateHTML } from '@tiptap/html'
import { defaultExtensions } from '@/lib/default-extensions'
import { defaultEditorContent } from '@/lib/default-content'

export default function View () {
  const { id } = useParams() || ''
  const { article, articleLoading } = useArticle(id)
  console.log(article)
  const editorContentObject = article ? JSON.parse(article.editorContent) : null
  console.log(editorContentObject)

  const output = useMemo(() => {
    return editorContentObject
      ? generateHTML(editorContentObject, defaultExtensions)
      : ''
  }, [editorContentObject])

  return editorContentObject ? (
    <div dangerouslySetInnerHTML={{ __html: output }}></div>
  ) : (
    <></>
  )
}
