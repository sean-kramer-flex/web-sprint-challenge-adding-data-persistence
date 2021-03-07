// build your `/api/tasks` router here
const db = require('../../data/dbConfig')
const tasksModel = require('./model')
const router = require('express').Router()

router.post('/', async (req, res, next) => {
  try {
const [id] = await tasksModel.createTask(req.body)

const newTask = await db('tasks').where('task_id', id).first()
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