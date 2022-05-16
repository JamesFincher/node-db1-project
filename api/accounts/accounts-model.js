const { default: knex } = require('knex')
const db = require('../../data/db-config')

const getAll = () => {
  return db('accounts')
  // DO YOUR MAGIC
}

const getById = (id) => {
  return db('accounts').where('id', id).first()
  // DO YOUR MAGIC
}

const create = ({ })=> {
  // DO YOUR MAGIC
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const  deleteById =  (id) => { 
  console.log('before', id)
  return db('accounts').where('id', id).del()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
