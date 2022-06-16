import {Skill} from '../models/skill.js'
// import {skills} from '../data/skill-data.js'

function index(req, res) {
    Skill.find({})
    .then(skills => {
        res.render('skills/index', {
            skills:skills
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

export {
    index,
    newSkill as new,
    create,
    show,
}