import mongoose from 'mongoose'

const EditorContentSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  content: {
    type: Object,
    required: true
  }
})

const EditorContent = mongoose.model('EditorContent', EditorContentSchema)

export default EditorContent
