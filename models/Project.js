const mongoose = require('mongoose')
const Schema = mongoose.Schema

let projectSchema = new Schema ({
  name:String,
  projectName:String,
  recursos:String,
  tipo:Array,
  img:String,
  description:String,
  address: {
    location: {
      type: String,
      default: 'Point',
    },
    coordinates: []
  }
}, {timestamps:true, versionKey:false})


module.exports = mongoose.model ('Project', projectSchema  )