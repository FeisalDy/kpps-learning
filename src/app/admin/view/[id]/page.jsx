'use client'
import { useParams } from 'next/navigation'
import { useArticle } from '@/hooks/useArticle'
import React, { useMemo } from 'react'
import { generateHTML } from '@tiptap/html'
import { defaultExtensions } from '@/lib/default-extensions'
import styles from '@/components/Global.module.css'
import { Card, Skeleton } from '@nextui-org/react'

export default function View () {
  const { id } = useParams() || ''
  const { article, articleLoading } = useArticle(id)

  const editorContentObject = article ? JSON.parse(article.editorContent) : null

  const output = useMemo(() => {
    return editorContentObject
      ? generateHTML(editorContentObject, defaultExtensions)
      : ''
  }, [editorContentObject])

  return editorContentObject ? (
    <>
      {articleLoading ? (
        <Card className='w-full p-4 space-y-5' radius='lg'>
          <Skeleton className='rounded-lg'>
            <div className='h-24 rounded-lg bg-default-300'></div>
          </Skeleton>
          <div className='space-y-3'>
            <Skeleton className='w-3/5 rounded-lg'>
              <div className='w-3/5 h-3 rounded-lg bg-default-200'></div>
            </Skeleton>
            <Skeleton className='w-4/5 rounded-lg'>
              <div className='w-4/5 h-3 rounded-lg bg-default-200'></div>
            </Skeleton>
            <Skeleton className='w-2/5 rounded-lg'>
              <div className='w-2/5 h-3 rounded-lg bg-default-300'></div>
            </Skeleton>
          </div>
        </Card>
      ) : (
        <div className='px-4'>
          <h1 className='my-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
            {article.title}
          </h1>
          <div
            className={`${styles.prose} mx-auto`}
            dangerouslySetInnerHTML={{ __html: output }}
          ></div>
        </div>
      )}
    </>
  ) : (
    <></>
  )
}
