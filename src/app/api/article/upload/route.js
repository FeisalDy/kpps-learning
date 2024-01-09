import connect from '@/utils/db'
import { NextResponse } from 'next/server'
import Article from '@/models/Article'

export const POST = async request => {
  const { title, editorContent, image } = await request.json()
  console.log({ image })

  await connect()

  const newArticle = new Article({
    title,
    editorContent,
    image
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
