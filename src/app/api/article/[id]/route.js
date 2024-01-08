import Article from '@/models/Article'
import connect from '@/utils/db'

export const GET = async (req, { params }) => {
  try {
    await connect()

    const article = await Article.findOne({ _id: params.id })
    if (!article || article.length === 0) {
      return new Response('No article found', { status: 404 })
    }

    return new Response(JSON.stringify(article), { status: 200 })
  } catch (error) {
    return new Response('Error getting article', { status: 500 })
  }
}
