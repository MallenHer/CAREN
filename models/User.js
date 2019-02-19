const mongoose = require('mongoose')
const Schema   = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')

let userSchema = new Schema ({
  username:{
    type: String,
    required: true,
  },
  email:String,
  password:String,
  name:String,
  last:String,
  img:String,
  address: {
    location: {
      type: String,
      default: 'Point',
    },
    coordinates: []
  }
},{timestamps:true, versionKey:false})

userSchema.plugin(passportLocalMongoose, {usernameField:"email"})
module.exports = mongoose.model('User', userSchema)