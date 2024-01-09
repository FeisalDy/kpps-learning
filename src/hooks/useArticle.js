import useSWR from 'swr'
import { getArticle, getArticles } from '@/lib/article'
import { AxiosError } from 'axios'

export function useArticle (id) {
  const { data, isLoading } = useSWR(id, async () => {
    try {
      return await getArticle(id)
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 404) {
        return null
      } else {
        throw error
      }
    }
  })

  return {
    article: data,
    articleLoading: isLoading
  }
}

export function useArticles (page, limit) {
  const { data, isLoading } = useSWR([page, limit], async () => {
    try {
      return await getArticles(page, limit)
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 404) {
        return null
      } else {
        throw error
      }
    }
  })

  return {
    articles: data,
    articlesLoading: isLoading
  }
}
