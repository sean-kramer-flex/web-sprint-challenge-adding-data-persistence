const db = require('../../data/dbConfig')

function createProject(project) {
  return db.insert(project).into('projects')
}

function getProjects() {
  return db('projects')
}

module.exports = {
  createProject,
  getProjects
}
