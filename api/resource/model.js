const db = require('../../data/dbConfig')

function createResource(resource) {
  return db.insert(resource).into('resources')
}

function getResources() {
  return db('resources')
}

module.exports = {
  createResource,
  getResources
}

