import Axios from '@/utils/axios'

export async function getArticle (id) {
  const res = await Axios.get(`/article/${id}`)
  return res.data
}

export async function getArticles (page, limit) {
  const res = await Axios.get(`/article?page=${page}&limit=${limit}`)
  return res.data
}
