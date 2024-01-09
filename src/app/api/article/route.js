import Article from '@/models/Article'
import connect from '@/utils/db'

export const GET = async req => {
  try {
    await connect()

    const page = parseInt(req.nextUrl.searchParams.get('page')) || 1
    const limit = parseInt(req.nextUrl.searchParams.get('limit')) || 10
    const skip = (page - 1) * limit

    const totalArticles = await Article.countDocuments({})
    const totalPages = Math.ceil(totalArticles / limit)

    const articles = await Article.find({}).skip(skip).limit(limit).exec()

    const hasNextPage = page < totalPages
    const hasPrevPage = page > 1

    const paginationInfo = {
      hasNextPage,
      hasPrevPage,
      total: totalArticles,
      totalPages,
      currentPage: page
    }

    const responsePayload = {
      articles,
      pagination: paginationInfo
    }

    return new Response(JSON.stringify(responsePayload), { status: 200 })
  } catch (error) {
    return new Response('Error getting articles', { status: 500 })
  }
}
