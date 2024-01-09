'use client'
import { useSearchParams } from 'next/navigation'
import { useArticles } from '@/hooks/useArticle'
import React, { useMemo } from 'react'
import { generateHTML } from '@tiptap/html'
import { defaultExtensions } from '@/lib/default-extensions'
import styles from '@/components/Global.module.css'
import { Card, Skeleton } from '@nextui-org/react'

const View = () => {
  const searchParams = useSearchParams()
  //   const page = searchParams.get('page') | 0
  //   const limit = searchParams.get('limit') | 10
  const page = 1
  const limit = 5

  const { articles, articlesLoading } = useArticles(page, limit)

  return <div>View</div>
}

export default View
