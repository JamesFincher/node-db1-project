const { default: knex } = require('knex')
const db = require('../../data/db-config')

const getAll = () => {
  return db('accounts')
  // DO YOUR MAGIC
}

const getByName = name => {
  return db('accounts')
    .where({ name })
    .first()
}

const getById = (id) => {
  return db('accounts').where('id', id).first()
  // DO YOUR MAGIC
}

const  create = async (account)=> {
  const [id] = await db('accounts')
  .insert(account)
  return getById(id)
}

const updateById = async (id, account) => {
await db('accounts')
.where('id', id)
.update(account)
return getById(id)
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
  getByName
}
