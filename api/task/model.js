const db = require('../../data/dbConfig')

function createTask (task) {
  return db.insert(task).into('tasks')
 
}

function getTasks () {
  return db('tasks as t').innerJoin('projects as p', 't.project_id', 'p.project_id').select('t.*', 'p.project_name', 'p.project_description')
}


module.exports = {
  createTask,
  getTasks
}

