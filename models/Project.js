const mongoose = require('mongoose')
const Schema = mongoose.Schema

let projectSchema = new Schema ({
  name:String,
  projectName:String,
  recursos:String,
  tipo:String,
  img:String,
  description:String,
  join: Number,
  address: {
    location: {
      type: String,
      default: 'Point',
    },
    coordinates: []
  }
}, {timestamps:true, versionKey:false})


module.exports = mongoose.model ('Project', projectSchema  )