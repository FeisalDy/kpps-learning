import Axios from '@/utils/axios'

export async function getArticle (id) {
  const res = await Axios.get(`/article/${id}`)
  return res.data
}
