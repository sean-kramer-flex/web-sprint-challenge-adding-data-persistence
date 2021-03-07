const projectsModel = require('./model')
const router = require('express').Router()

router.post('/', async (req, res, next) => {
  try {
const newProject = await projectsModel.createProject(req.body)

res.status(201).json(newProject)
  } catch(err) {
    next(err)
  }
})


router.get('/', async (req, res, next) => {
  try {
const data = await projectsModel.getProjects()

res.json(data)
  } catch(err) {
    next(err)
  }
})

module.exports = router
