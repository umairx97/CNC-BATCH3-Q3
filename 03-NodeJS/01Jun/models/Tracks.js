const mongoose = require('mongoose')

const trackSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    lowercase: true
  },

  albumId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Album'
  },

  singer: {
    type: Object,
    default: {}
  }
}, {
  timestamps: true
})

const Track = mongoose.model('Track', trackSchema)

module.exports = Track
