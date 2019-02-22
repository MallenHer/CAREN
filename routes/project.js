let router = require('express').Router()
let Post = require('../models/Project')




router.post('/projects/:id', (req,res,next)=>{
  Post.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(post=>res.redirect('/projects'))
  .catch(e=>next(e))
})

router.get('/detail/:id', (req,res,next)=>{
  Post.findById(req.params.id)
  .then(project=>
    {
      // console.log(project)
      res.render('projects/detail', project)})
  .catch(e=>next(e))
})

router.get('/projects', (req,res,next)=>{
  Post.find()
  .then(projects=>res.render('projects/projects', {projects}))
  .catch(e=>next(e))
})


router.post("/new", (req,res, next)=>{
  Post.create(req.body)
  .then(project=>{
    console.log(project)
    res.redirect(`/projects/detail/${project._id}`)
  })
  .catch(e=>next(e))
})

router.get("/new", (req,res)=>{
  res.render('projects/new')
})

module.exports = router