const User = require('../models/User')
const passport = require('passport')






passport.use(User.createStrategy()) //primer estrategia (local)

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())


module.exports = passport