const resourcesModel = require('./model')
const router = require('express').Router()

router.post('/', async (req, res, next) => {
  try {
const newResource = await resourcesModel.createResource(req.body)

res.status(201).json(newResource)
  } catch(err) {
    next(err)
  }
})


router.get('/', async (req, res, next) => {
  try {
const data = await resourcesModel.getResources()

res.json(data)
  } catch(err) {
    next(err)
  }
})

module.exports = router
