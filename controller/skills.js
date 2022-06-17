import {Skill} from '../models/skill.js'
// import {skills} from '../data/skill-data.js'

function index(req, res) {
    Skill.find({})
    .then(skills => {
        res.render('skills/index', {
            skills:skills,
            time: req.time
        })
    })
    .catch(error=> {
        console.log(error)
        res.redirect('/skills')
    })
}

// function index(req,res) {
//     res.render('skills/index', {
//         skills:skills
//     })
// }

function newSkill(req, res) {
    res.render('skills/new')
}

function create(req,res){
    Skill.create(req.body)
    .then(skill => {
        res.redirect('/skills')
    })
    .catch(error => {
        console.log(error)
        res.redirect('/skills')
    })
}

function show(req, res) {
    Skill.findById(req.params.id)
    .then(skill => {
      res.render('skills/show', {
        skill: skill
      })
    })
    .catch(error => {
      console.log(error)
      res.redirect('/skills')
    })
  }

function deleteSkill(req,res) {
    Skill.findByIdAndDelete(req.params.id)
    .then(todo => {
        res.redirect('/skills')
    })
    .catch(error => {
        console.log(error)
        res.redirect('/skills')
      })
}

function edit(req, res) {
    Skill.findById(req.params.id)
    .then(skill => {
      res.render('skills/edit', {
        skill: skill
      })
    })
    .catch(error => {
      console.log(error)
      res.redirect('/skills')
    })
}

function update(req, res) {
    req.body.start = !!req.body.start
    Skill.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(skill => {
      res.redirect(`/skills/${skill._id}`)
    })
    .catch(error => {
      console.log(error)
      res.redirect('/skills')
    })
  }

export {
    index,
    show,
    newSkill as new,
    create,
    deleteSkill as delete,
    edit,
    update
}