const db = require('../../data/dbConfig')

function createTask (task) {
  db.insert(task).into('tasks')
}


module.exports = {
  createTask,
}

