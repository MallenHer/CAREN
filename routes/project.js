let router = require('express').Router()
let Post = require('../models/Project')

/*
router.post('/detail/:id', (req,res,next)=>{
  let comment = new Comment(req.body)
  comment.post = req.params.id
  comment.save()
  .then(()=>{
    res.redirect('/projects/detail/' + req.params.id )
  })
  // let comment = req.body
  // Post.findByIdAndUpdate(req.params.id, {$push:{comments:comment}}, {new:true})
  // .then(res.redirect('/posts/detail/' + req.params.id ))
  // .catch(e=>next(e))
})

router.get('/detail/:id', (req,res,next)=>{
  Promise.all([
    Post.findById(req.params.id), 
    Comment.find({post:req.params.id})
  ])
  .then(results=>{
    let project = results[0]
    post.comments = results[1]
    res.render('projects/detail', project)
  })
  .catch(e=>next(e))
  // Post.findById(req.params.id)
  // .then(post=>res.render('posts/detail', post))
  // .catch(e=>next(e))
})


router.post('/projects/:id', (req,res,next)=>{
  Post.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(post=>res.redirect('/projects'))
  .catch(e=>next(e))
})

router.get('/projects/:id', (req,res,next)=>{
  Post.findById(req.params.id)
  .then(post=>res.render('/projects/edit', post))
  .catch(e=>next(e))
})

router.get('/projects', (req,res,next)=>{
  Post.find()
  .then(projects=>res.render('/projects/projects', {projects}))
  .catch(e=>next(e))
})
*/

router.post("/new", (req,res, next)=>{
  Post.create(req.body)
  .then(project=>{
    res.redirect(`/projects/detail/${project._id}`, {message: "El proyecto se creó correctamente"})
  })
  .catch(e=>next(e))
})

router.get("/new", (req,res)=>{
  res.render('projects/new')
})

module.exports = router