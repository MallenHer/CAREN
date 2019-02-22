
const router = require('express').Router()
const User = require('../models/User')
const passport = require('passport')
const uploadCloud = require("../helpers/cloudinary")



function isLogged(req, res, next) {
  if (req.isAuthenticated()) return next()
  return res.redirect('/login')
}

router.get('/signup', (req, res, next) => {
  res.render('auth/signup')
})

router.post('/signup', (req, res, next) => {
  if (req.body.password != req.body.password2) {
    return res.render('auth/signup', { error: 'Please type the same password' })
  }
  User.register({ ...req.body }, req.body.password)
    .then(() => {
      passport.authenticate('local')(req, res, () => {
        return res.redirect('/profile')
      })
    })
    .catch(error => {
      res.render('auth/signup', { error })
    })
})

router.get('/login', (req, res, next) => {
  res.render('auth/login')
})

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  console.log(req.user)
  res.redirect('/profile')
})

router.get('/profile', isLogged, (req, res, next) => {
  let {username} = req.user
  if (req.query.email) {username = req.user.username}
  User.findOne({ username })
    .then(user => {
      console.log(user)
      res.render('auth/profile', user)
    })
    .catch(error => {
      res.render('auth/profile', { error })
    })
})


//PROFILE
router.post('/profile',  
isLogged, 
uploadCloud.single('/profile'),
(req,res)=>{
  if(req.files.cover) {
 req.body.profile = req.files.profile[0].url
  } 
  User.findByIdAndUpdate(req.user._id, req.body)
 .then(()=>{
    res.redirect('/profile')
  })
})




// router.get('/profile/:id')

router.get('/logout', (req, res, next) => {
  req.logOut()
  res.redirect('/')
})




module.exports = router
