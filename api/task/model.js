const db = require('../../data/dbConfig')

function createTask (task) {
  return db.insert(task).into('tasks')
}

function getTasks () {
  return db('tasks')
}


module.exports = {
  createTask,
  getTasks
}

