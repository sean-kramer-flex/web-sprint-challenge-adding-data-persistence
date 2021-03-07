// build your `/api/tasks` router here

const tasksModel = require('./model')
const router = require('express').Router()

router.post('/', async (req, res, next) => {
  try {
const newTask = await tasksModel.createTask(req.body)

res.status(201).json(newTask)
  } catch(err) {
    next(err)
  }
})


router.get('/', async (req, res, next) => {
  try {
const data = await tasksModel.getTasks()

res.json(data)
  } catch(err) {
    next(err)
  }
})

module.exports = router