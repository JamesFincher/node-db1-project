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

const  create = async ({name, budget})=> {
  const [id] = await db('accounts').insert({name, budget})
  const newAccount = await module.getById(id)
  return newAccount
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
