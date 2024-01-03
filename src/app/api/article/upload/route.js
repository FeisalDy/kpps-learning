import connect from '@/utils/db'
import { NextResponse } from 'next/server'
import Article from '@/models/Article'

export const POST = async request => {
  const { title, editorContent } = await request.json()

  await connect()

  const newArticle = new Article({
    title,
    editorContent
  })

  try {
    await newArticle.save()
    return new NextResponse('Article is saveed', { status: 200 })
  } catch (err) {
    return new NextResponse(err, {
      status: 500
    })
  }
}
