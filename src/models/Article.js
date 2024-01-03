import mongoose from 'mongoose'

const { Schema } = mongoose

const ArticleSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    editorContent: {
      type: Schema.Types.Mixed,
      required: true
    }
  },
  { timestamps: true }
)

export default mongoose.models.Article ||
  mongoose.model('Article', ArticleSchema)
