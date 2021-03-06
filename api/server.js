const express = require('express')
const server = express()
const projectsRouter = require('./project/router')
const resourcesRouter = require('./resource/router')
const tasksRouter = require('./task/router')

server.use(express.json())
server.use('/projects', projectsRouter)
server.use('/resources', resourcesRouter)
server.use('/tasks', tasksRouter)

server.get('/welcome', (req, res) => {
  res.send("server is set up and working!")
})

module.exports = server
